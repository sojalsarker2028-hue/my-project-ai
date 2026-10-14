import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import { diagnoseLeafWithAI } from './server/aiDiagnosis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.resolve(__dirname, 'data', 'db.json');
const SESSIONS = new Map<string, { createdAt: number; expiresAt: number }>();

// Ensure data folder exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Database Helper
function readDatabase(): any {
  try {
    if (fs.existsSync(DB_PATH)) {
      const content = fs.readFileSync(DB_PATH, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('Failed to read database, falling back:', err);
  }
  return {
    admin: {
      salt: 'a1b2c3d4e5f67890',
      passwordHash: 'f7dcb5ba35572c2be87db20cb2329f954a4472414f37d187db819f384c382106',
      updatedAt: Date.now()
    },
    settings: {
      siteTitle: 'Plant Doctor AI - Leaf Health & Disease Guide',
      bannerNoticeEn: 'Official Agricultural Leaf Diagnostic Portal. All data is verified for agricultural education.',
      bannerNoticeBn: 'অফিসিয়াল কৃষি পাতা রোগ নির্ণয় পোর্টাল। সমস্ত তথ্য কৃষি শিক্ষার জন্য যাচাইকৃত।',
      showBanner: true,
      allowRegistration: true,
      examPassPercentage: 70,
      maintenanceMode: false
    },
    users: [],
    notifications: [],
    exams: [],
    examResults: []
  };
}

function writeDatabase(data: any) {
  try {
    const tmpPath = `${DB_PATH}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tmpPath, DB_PATH);
  } catch (err) {
    console.error('Failed to write database:', err);
  }
}

function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 1000, 32, 'sha256').toString('hex');
}

function authenticateAdmin(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];
  const session = SESSIONS.get(token);
  if (!session || Date.now() > session.expiresAt) {
    if (session) SESSIONS.delete(token);
    return res.status(401).json({ success: false, error: 'Unauthorized: Session expired or invalid' });
  }

  next();
}

async function startServer() {
  const app = express();
  const PORT = 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));

  // --- API ROUTES ---

  // Admin Login
  app.post('/api/admin/login', (req, res) => {
    const { password } = req.body;
    if (!password || typeof password !== 'string') {
      return res.status(400).json({ success: false, error: 'Password is required' });
    }

    const db = readDatabase();
    const admin = db.admin || {
      salt: 'a1b2c3d4e5f67890',
      passwordHash: 'f7dcb5ba35572c2be87db20cb2329f954a4472414f37d187db819f384c382106'
    };

    const computedHash = hashPassword(password.trim(), admin.salt);
    if (computedHash !== admin.passwordHash) {
      return res.status(401).json({
        success: false,
        error: 'Access Denied: Incorrect administrator password'
      });
    }

    // Generate secure token (8-hour session)
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = Date.now() + 8 * 60 * 60 * 1000;
    SESSIONS.set(token, { createdAt: Date.now(), expiresAt });

    return res.json({
      success: true,
      token,
      expiresAt,
      message: 'Admin authentication successful'
    });
  });

  // Verify Admin Token
  app.post('/api/admin/verify', (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ valid: false });
    }
    const token = authHeader.split(' ')[1];
    const session = SESSIONS.get(token);
    if (!session || Date.now() > session.expiresAt) {
      return res.status(401).json({ valid: false });
    }
    return res.json({ valid: true });
  });

  // Admin Logout
  app.post('/api/admin/logout', (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      SESSIONS.delete(token);
    }
    return res.json({ success: true });
  });

  // Change Admin Password
  app.post('/api/admin/change-password', authenticateAdmin, (req, res) => {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ success: false, error: 'Current and new password are required' });
    }
    if (typeof newPassword !== 'string' || newPassword.length < 6) {
      return res.status(400).json({ success: false, error: 'New password must be at least 6 characters' });
    }

    const db = readDatabase();
    const admin = db.admin;
    const computedCurrent = hashPassword(currentPassword.trim(), admin.salt);
    if (computedCurrent !== admin.passwordHash) {
      return res.status(400).json({ success: false, error: 'Current password does not match' });
    }

    const newSalt = crypto.randomBytes(16).toString('hex');
    const newHash = hashPassword(newPassword.trim(), newSalt);
    db.admin = {
      salt: newSalt,
      passwordHash: newHash,
      updatedAt: Date.now()
    };
    writeDatabase(db);

    return res.json({ success: true, message: 'Admin password updated successfully' });
  });

  // Get Registered Users (Admin)
  app.get('/api/admin/users', authenticateAdmin, (req, res) => {
    const db = readDatabase();
    return res.json({ success: true, users: db.users || [] });
  });

  // Add / Register User (Public or Admin)
  app.post('/api/users', (req, res) => {
    const { fullName, mobileNumber } = req.body;
    if (!fullName || !mobileNumber) {
      return res.status(400).json({ success: false, error: 'Full name and mobile number are required' });
    }

    const cleanName = String(fullName).trim();
    const cleanMobile = String(mobileNumber).trim();

    const db = readDatabase();
    if (!db.users) db.users = [];

    // Find if user with this mobile already exists
    const existingIndex = db.users.findIndex((u: any) => u.mobileNumber === cleanMobile);
    const now = Date.now();

    if (existingIndex >= 0) {
      db.users[existingIndex].fullName = cleanName;
      db.users[existingIndex].updatedAt = now;
      writeDatabase(db);
      return res.json({ success: true, user: db.users[existingIndex] });
    }

    const newUser = {
      id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      fullName: cleanName,
      mobileNumber: cleanMobile,
      createdAt: now,
      updatedAt: now,
      status: 'active',
      examsTaken: 0
    };

    db.users.push(newUser);
    writeDatabase(db);
    return res.json({ success: true, user: newUser });
  });

  // Admin Update User
  app.put('/api/admin/users/:id', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    const { fullName, mobileNumber, status, notes } = req.body;
    const db = readDatabase();
    const user = (db.users || []).find((u: any) => u.id === id);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    if (fullName) user.fullName = String(fullName).trim();
    if (mobileNumber) user.mobileNumber = String(mobileNumber).trim();
    if (status) user.status = status;
    if (notes !== undefined) user.notes = notes;
    user.updatedAt = Date.now();

    writeDatabase(db);
    return res.json({ success: true, user });
  });

  // Admin Delete User
  app.delete('/api/admin/users/:id', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    const db = readDatabase();
    const initialLen = (db.users || []).length;
    db.users = (db.users || []).filter((u: any) => u.id !== id);

    if (db.users.length === initialLen) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    writeDatabase(db);
    return res.json({ success: true, message: 'User deleted' });
  });

  // Get Exams & Questions (Public / Student view or Admin)
  app.get('/api/exams', (req, res) => {
    const db = readDatabase();
    return res.json({ success: true, exams: db.exams || [] });
  });

  // Add New Exam Question (Admin)
  app.post('/api/admin/exam-questions', authenticateAdmin, (req, res) => {
    const { examId, questionEn, questionBn, optionsEn, optionsBn, correctOptionIndex, explanationEn, explanationBn, category, difficulty } = req.body;
    if (!examId || !questionEn || !optionsEn || optionsEn.length < 2) {
      return res.status(400).json({ success: false, error: 'Valid question and options required' });
    }

    const db = readDatabase();
    const exam = (db.exams || []).find((e: any) => e.id === examId);
    if (!exam) {
      return res.status(404).json({ success: false, error: 'Exam not found' });
    }

    const newQuestion = {
      id: `q_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      examId,
      questionEn: String(questionEn).trim(),
      questionBn: String(questionBn || questionEn).trim(),
      optionsEn: Array.isArray(optionsEn) ? optionsEn : [],
      optionsBn: Array.isArray(optionsBn) ? optionsBn : optionsEn,
      correctOptionIndex: Number(correctOptionIndex) || 0,
      explanationEn: String(explanationEn || '').trim(),
      explanationBn: String(explanationBn || explanationEn || '').trim(),
      category: String(category || 'General Leaf Pathology'),
      difficulty: difficulty || 'Medium'
    };

    if (!exam.questions) exam.questions = [];
    exam.questions.push(newQuestion);
    writeDatabase(db);

    return res.json({ success: true, question: newQuestion });
  });

  // Edit Exam Question (Admin)
  app.put('/api/admin/exam-questions/:id', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    const db = readDatabase();
    let found = false;
    let updatedQuestion = null;

    for (const exam of (db.exams || [])) {
      const qIndex = (exam.questions || []).findIndex((q: any) => q.id === id);
      if (qIndex >= 0) {
        exam.questions[qIndex] = {
          ...exam.questions[qIndex],
          ...req.body,
          id
        };
        updatedQuestion = exam.questions[qIndex];
        found = true;
        break;
      }
    }

    if (!found) {
      return res.status(404).json({ success: false, error: 'Question not found' });
    }

    writeDatabase(db);
    return res.json({ success: true, question: updatedQuestion });
  });

  // Delete Exam Question (Admin)
  app.delete('/api/admin/exam-questions/:id', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    const db = readDatabase();
    let deleted = false;

    for (const exam of (db.exams || [])) {
      const initialCount = (exam.questions || []).length;
      exam.questions = (exam.questions || []).filter((q: any) => q.id !== id);
      if (exam.questions.length < initialCount) {
        deleted = true;
        break;
      }
    }

    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Question not found' });
    }

    writeDatabase(db);
    return res.json({ success: true, message: 'Question deleted' });
  });

  // Submit Exam (Student or Admin taking exam)
  // CRITICAL REQUIREMENT: Strictly NO ranking or leaderboard calculations!
  app.post('/api/exams/submit', (req, res) => {
    const { examId, userId, userName, userMobile, answers } = req.body;
    if (!examId || !Array.isArray(answers)) {
      return res.status(400).json({ success: false, error: 'Invalid exam submission data' });
    }

    const db = readDatabase();
    const exam = (db.exams || []).find((e: any) => e.id === examId);
    if (!exam) {
      return res.status(404).json({ success: false, error: 'Exam not found' });
    }

    const questions = exam.questions || [];
    let score = 0;
    const evaluatedAnswers: any[] = [];

    questions.forEach((q: any) => {
      const userAns = answers.find((a: any) => a.questionId === q.id);
      const selectedIndex = userAns !== undefined ? userAns.selectedOptionIndex : -1;
      const isCorrect = selectedIndex === q.correctOptionIndex;
      if (isCorrect) score += 1;

      evaluatedAnswers.push({
        questionId: q.id,
        selectedOptionIndex: selectedIndex,
        correctOptionIndex: q.correctOptionIndex,
        isCorrect
      });
    });

    const totalQuestions = questions.length;
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    const passPercentage = exam.passPercentage || db.settings?.examPassPercentage || 70;
    const passed = percentage >= passPercentage;

    const submissionResult = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      userId: userId || 'anonymous',
      userName: userName || 'Student',
      userMobile: userMobile || 'N/A',
      examId: exam.id,
      examTitle: exam.titleEn,
      score,
      totalQuestions,
      percentage,
      passed,
      answers: evaluatedAnswers,
      completedAt: Date.now()
    };

    if (!db.examResults) db.examResults = [];
    db.examResults.push(submissionResult);

    // Update user exam count if user is registered
    if (userId && db.users) {
      const user = db.users.find((u: any) => u.id === userId || u.mobileNumber === userMobile);
      if (user) {
        user.examsTaken = (user.examsTaken || 0) + 1;
      }
    }

    writeDatabase(db);

    return res.json({
      success: true,
      result: submissionResult
    });
  });

  // Get Exam Results (Admin)
  // NO RANKINGS ARE RETURNED OR COMPUTED
  app.get('/api/admin/exam-results', authenticateAdmin, (req, res) => {
    const db = readDatabase();
    return res.json({ success: true, results: db.examResults || [] });
  });

  // Get Website Settings (Public)
  app.get('/api/settings', (req, res) => {
    const db = readDatabase();
    return res.json({ success: true, settings: db.settings || {} });
  });

  // Update Website Settings (Admin)
  app.put('/api/admin/settings', authenticateAdmin, (req, res) => {
    const db = readDatabase();
    db.settings = {
      ...db.settings,
      ...req.body
    };
    writeDatabase(db);
    return res.json({ success: true, settings: db.settings });
  });

  // --- NOTIFICATIONS API ---

  // Admin Send Notification to ALL registered users
  app.post('/api/admin/notifications', authenticateAdmin, (req, res) => {
    const { title, message, category, priority } = req.body;
    if (!title || !message) {
      return res.status(400).json({ success: false, error: 'Title and message are required' });
    }

    const cleanTitle = String(title).trim();
    const cleanMessage = String(message).trim();
    if (!cleanTitle || !cleanMessage) {
      return res.status(400).json({ success: false, error: 'Title and message cannot be empty' });
    }

    const db = readDatabase();
    if (!db.notifications) db.notifications = [];
    const registeredUsers = db.users || [];
    const totalRecipients = registeredUsers.length;

    const newNotification = {
      id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      title: cleanTitle,
      message: cleanMessage,
      category: category || 'announcement', // 'announcement' | 'alert' | 'advisory' | 'update'
      priority: priority || 'normal', // 'normal' | 'high'
      sentAt: Date.now(),
      targetAudience: 'all_registered_users',
      recipientCount: totalRecipients,
      deliveryStatus: 'delivered',
      readBy: [] // array of userIds or mobile numbers who opened/read it
    };

    db.notifications.unshift(newNotification);
    writeDatabase(db);

    return res.json({
      success: true,
      notification: newNotification,
      message: `Notification broadcasted successfully to ${totalRecipients} registered user(s).`
    });
  });

  // Admin Get Notification History
  app.get('/api/admin/notifications', authenticateAdmin, (req, res) => {
    const db = readDatabase();
    return res.json({ success: true, notifications: db.notifications || [] });
  });

  // Admin Delete Notification
  app.delete('/api/admin/notifications/:id', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    const db = readDatabase();
    const prevLen = (db.notifications || []).length;
    db.notifications = (db.notifications || []).filter((n: any) => n.id !== id);
    if (db.notifications.length === prevLen) {
      return res.status(404).json({ success: false, error: 'Notification not found' });
    }
    writeDatabase(db);
    return res.json({ success: true, message: 'Notification deleted' });
  });

  // Public / User Get In-App Notifications
  app.get('/api/notifications', (req, res) => {
    const db = readDatabase();
    // Return all broadcast notifications sorted by newest first
    const list = (db.notifications || []).map((n: any) => ({
      id: n.id,
      title: n.title,
      message: n.message,
      category: n.category,
      priority: n.priority,
      sentAt: n.sentAt
    }));
    return res.json({ success: true, notifications: list });
  });

  // Mark notification read by user
  app.post('/api/notifications/:id/read', (req, res) => {
    const { id } = req.params;
    const { userId, userMobile } = req.body;
    const identifier = userId || userMobile || 'anonymous';

    const db = readDatabase();
    const notif = (db.notifications || []).find((n: any) => n.id === id);
    if (notif) {
      if (!Array.isArray(notif.readBy)) notif.readBy = [];
      if (!notif.readBy.includes(identifier)) {
        notif.readBy.push(identifier);
        writeDatabase(db);
      }
    }
    return res.json({ success: true });
  });

  // AI Plant Leaf Health & Disease Diagnosis (Vision Engine)
  app.post('/api/ai/diagnose-leaf', async (req, res) => {
    try {
      const { imageBase64, selectedCrop, mimeType } = req.body;
      if (!imageBase64) {
        return res.status(400).json({ success: false, error: 'imageBase64 parameter is required' });
      }

      const diagnosis = await diagnoseLeafWithAI({
        imageBase64,
        selectedCrop,
        mimeType
      });

      return res.json(diagnosis);
    } catch (err: any) {
      console.error('Error during AI leaf diagnosis:', err);
      return res.status(500).json({
        success: false,
        error: err?.message || 'AI diagnosis failed'
      });
    }
  });

  // Mount Vite middleware in development or serve static in production
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`> Full-stack server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Fatal server startup failure:', err);
  process.exit(1);
});
