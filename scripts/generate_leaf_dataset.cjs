const fs = require('fs');
const path = require('path');
const jpeg = require('jpeg-js');

const targetDir = path.join(__dirname, '..', 'src', 'assets', 'images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function renderLeaf(config) {
  const width = 480;
  const height = 480;
  const buffer = Buffer.alloc(width * height * 4);
  const cx = width / 2;
  const cy = height / 2;

  const {
    shape = 'ovate',
    baseColor = [46, 125, 50],
    veinColor = [102, 187, 106],
    hasTendril = false,
    hasWhiteSpeckles = false,
    dissected = false,
    segments = 5,
    spots = [], // array of { x: normX, y: normY, r: normR, color: [r,g,b] }
    chlorosis = 0,
    mosaic = false,
    blister = false,
  } = config;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const nx = (x - cx) / (width * 0.42); // -1.2 to 1.2
      const ny = (y - cy) / (height * 0.44); // -1.1 to 1.1

      let inside = false;
      let edgeDist = 0;

      if (shape === 'cordate') { // Heart shape
        // Heart curve
        const adjY = ny - 0.2;
        const heartEq = Math.pow(nx * nx + adjY * adjY - 0.65, 3) - nx * nx * Math.pow(adjY, 3);
        inside = heartEq <= 0.05 && ny > -0.9 && ny < 0.85;
      } else if (shape === 'lanceolate') { // Narrow long leaf
        const taper = Math.max(0.04, 1.0 - Math.abs(ny) * 0.7);
        inside = (nx * nx) / (0.12 * taper) + ny * ny < 0.88;
      } else if (shape === 'linear') { // Very narrow leaf
        const taper = Math.max(0.02, 1.0 - Math.abs(ny) * 0.6);
        inside = (nx * nx) / (0.04 * taper) + ny * ny < 0.92;
      } else if (shape === 'arrowhead') { // Sagittate / arrow
        const taper = Math.max(0.05, 1.0 - ny * 0.5);
        const inBlade = (nx * nx) / (0.45 * taper) + (ny - 0.1) * (ny - 0.1) < 0.75;
        const lobes = ny > 0.3 && Math.abs(nx) > 0.2 && Math.abs(nx) < 0.8 && ny < 0.95;
        inside = inBlade || lobes;
      } else if (shape === 'palmate') { // Lobed
        const r = Math.sqrt(nx * nx + ny * ny);
        const angle = Math.atan2(ny, nx);
        const lobeR = 0.55 + 0.25 * Math.cos(segments * angle);
        inside = r < lobeR && r > 0.03;
      } else if (shape === 'compound') { // Compound leaflets
        // Render 7 small oval leaflets
        let leafletHit = false;
        const pairs = [-0.6, -0.3, 0.0, 0.3];
        for (const py of pairs) {
          // left
          const ldx = nx + 0.25;
          const ldy = ny - py;
          if ((ldx * ldx) / 0.06 + (ldy * ldy) / 0.02 < 1.0) leafletHit = true;
          // right
          const rdx = nx - 0.25;
          const rdy = ny - py;
          if ((rdx * rdx) / 0.06 + (rdy * rdy) / 0.02 < 1.0) leafletHit = true;
        }
        // Terminal leaflet
        const tdx = nx;
        const tdy = ny + 0.8;
        if ((tdx * tdx) / 0.04 + (tdy * tdy) / 0.03 < 1.0) leafletHit = true;
        // Central rachis
        if (Math.abs(nx) < 0.015 && ny > -0.85 && ny < 0.5) leafletHit = true;
        inside = leafletHit;
      } else if (shape === 'pencil') { // Euphorbia tirucalli cylindrical branches
        const inMain = Math.abs(nx) < 0.05 && ny > -0.8 && ny < 0.8;
        const inBranch1 = Math.abs(nx - ny * 0.4) < 0.04 && ny > -0.5 && ny < 0.2;
        const inBranch2 = Math.abs(nx + ny * 0.5) < 0.04 && ny > -0.4 && ny < 0.3;
        const inBranch3 = Math.abs(nx - (ny + 0.3) * 0.6) < 0.035 && ny > -0.7 && ny < -0.1;
        inside = inMain || inBranch1 || inBranch2 || inBranch3;
      } else { // Standard ovate / elliptic
        const taper = Math.max(0.05, 1.0 - ny * 0.4);
        inside = (nx * nx) / (0.42 * taper) + ny * ny < 0.82;
      }

      if (hasTendril && !inside) {
        // Climbing tendril at the tip of Gloriosa
        if (ny < -0.85 && ny > -1.05) {
          const coilX = 0.15 * Math.sin((ny + 0.85) * 18);
          if (Math.abs(nx - coilX) < 0.02) inside = true;
        }
      }

      if (inside) {
        // Primary midrib vein
        const distMidrib = Math.abs(nx);
        // Lateral secondary veins
        const lateralAngle = shape === 'cordate' ? 2.5 : 4.0;
        const lateralVein = Math.abs(Math.sin((ny * 11 + Math.abs(nx) * lateralAngle) * Math.PI));
        const isVein = distMidrib < 0.028 || (lateralVein < 0.11 && distMidrib < 0.7);

        let rVal = baseColor[0];
        let gVal = baseColor[1];
        let bVal = baseColor[2];

        // Organic color shading from base to tip
        const shading = 1.0 - 0.15 * ny;
        rVal = Math.round(rVal * shading);
        gVal = Math.round(gVal * shading);
        bVal = Math.round(bVal * shading);

        // Chlorosis
        if (chlorosis > 0) {
          const yellowIntensity = chlorosis * (0.5 + 0.5 * Math.sin(nx * 8 + ny * 6));
          rVal = Math.min(255, Math.round(rVal + yellowIntensity * 120));
          gVal = Math.min(255, Math.round(gVal + yellowIntensity * 70));
          bVal = Math.max(0, Math.round(bVal - yellowIntensity * 40));
        }

        // Mosaic patterning
        if (mosaic) {
          const mPattern = Math.sin(nx * 14) * Math.cos(ny * 14);
          if (mPattern > 0.2) {
            rVal = Math.min(255, rVal + 75);
            gVal = Math.min(255, gVal + 60);
            bVal = Math.max(10, bVal - 20);
          }
        }

        // White speckles (e.g. Calla lily)
        if (hasWhiteSpeckles) {
          const speck = Math.sin(nx * 42) * Math.sin(ny * 38);
          if (speck > 0.72) {
            rVal = 240;
            gVal = 248;
            bVal = 242;
          }
        }

        // Vein highlight
        if (isVein) {
          rVal = Math.min(255, Math.round(rVal * 0.6 + veinColor[0] * 0.4 + 15));
          gVal = Math.min(255, Math.round(gVal * 0.6 + veinColor[1] * 0.4 + 20));
          bVal = Math.min(255, Math.round(bVal * 0.6 + veinColor[2] * 0.4 + 10));
        }

        // Render disease spots / lesions
        for (const sp of spots) {
          const sdx = nx - sp.x;
          const sdy = ny - sp.y;
          const sDist = Math.sqrt(sdx * sdx + sdy * sdy);
          if (sDist < sp.r) {
            const factor = Math.min(1.0, (sp.r - sDist) / (sp.r * 0.7));
            // Concentric rings or solid necrosis
            const ring = sp.ring ? Math.abs(Math.sin(sDist * 40)) : 1.0;
            const spotCol = sp.color || [80, 42, 20];
            rVal = Math.round(rVal * (1 - factor) + spotCol[0] * factor * (0.8 + 0.2 * ring));
            gVal = Math.round(gVal * (1 - factor) + spotCol[1] * factor * (0.8 + 0.2 * ring));
            bVal = Math.round(bVal * (1 - factor) + spotCol[2] * factor * (0.8 + 0.2 * ring));
          }
        }

        buffer[idx] = Math.max(0, Math.min(255, rVal));
        buffer[idx + 1] = Math.max(0, Math.min(255, gVal));
        buffer[idx + 2] = Math.max(0, Math.min(255, bVal));
        buffer[idx + 3] = 255;
      } else {
        // Natural neutral background with subtle vignette
        const rBg = Math.sqrt(nx * nx + ny * ny);
        const bgVal = Math.round(246 - rBg * 12);
        buffer[idx] = bgVal;
        buffer[idx + 1] = bgVal + 2;
        buffer[idx + 2] = bgVal - 3;
        buffer[idx + 3] = 255;
      }
    }
  }

  return jpeg.encode({ data: buffer, width, height }, 85).data;
}

// 1. HEALTHY LEAVES (5 new specimens to reach 25 total)
const newHealthyLeaves = [
  {
    fileName: 'healthy_lentil_leaf.jpg',
    config: {
      shape: 'compound',
      baseColor: [56, 142, 60],
      veinColor: [129, 199, 132],
    }
  },
  {
    fileName: 'healthy_cabbage_leaf.jpg',
    config: {
      shape: 'ovate',
      baseColor: [76, 175, 80],
      veinColor: [230, 245, 230], // thick white veins typical of Brassica
    }
  },
  {
    fileName: 'healthy_spinach_leaf.jpg',
    config: {
      shape: 'ovate',
      baseColor: [27, 94, 32], // rich dark emerald green
      veinColor: [76, 175, 80],
    }
  },
  {
    fileName: 'healthy_bottle_gourd_leaf.jpg',
    config: {
      shape: 'cordate',
      baseColor: [67, 160, 71],
      veinColor: [165, 214, 167],
    }
  },
  {
    fileName: 'healthy_jackfruit_leaf.jpg',
    config: {
      shape: 'ovate',
      baseColor: [20, 82, 35], // glossy leathery dark green
      veinColor: [174, 213, 129], // distinct yellowish midrib
    }
  }
];

// 2. DISEASED LEAVES (2 new specimens to reach 25 total)
const newDiseasedLeaves = [
  {
    fileName: 'bottle_gourd_anthracnose_leaf.jpg',
    config: {
      shape: 'cordate',
      baseColor: [70, 150, 75],
      veinColor: [160, 210, 160],
      chlorosis: 0.35,
      spots: [
        { x: -0.15, y: -0.1, r: 0.12, color: [90, 45, 20], ring: true },
        { x: 0.2, y: 0.15, r: 0.14, color: [75, 38, 15], ring: true },
        { x: -0.25, y: 0.3, r: 0.09, color: [110, 55, 25], ring: false },
        { x: 0.05, y: -0.35, r: 0.08, color: [85, 40, 18], ring: true },
      ]
    }
  },
  {
    fileName: 'papaya_ringspot_leaf.jpg',
    config: {
      shape: 'palmate',
      segments: 7,
      baseColor: [60, 140, 65],
      veinColor: [180, 220, 150],
      chlorosis: 0.65,
      mosaic: true,
      spots: [
        { x: -0.12, y: 0.05, r: 0.08, color: [40, 95, 40], ring: true }, // oily dark green ring
        { x: 0.15, y: -0.1, r: 0.09, color: [35, 90, 35], ring: true },
        { x: 0.0, y: 0.25, r: 0.07, color: [45, 100, 45], ring: true },
      ]
    }
  }
];

// 3. POISONOUS LEAVES (15 new specimens to reach 20 total)
const newPoisonousLeaves = [
  {
    fileName: 'toxic_abrus_precatorius_leaf.jpg',
    config: {
      shape: 'compound',
      baseColor: [50, 130, 55],
      veinColor: [120, 190, 125],
    }
  },
  {
    fileName: 'toxic_gloriosa_superba_leaf.jpg',
    config: {
      shape: 'lanceolate',
      hasTendril: true,
      baseColor: [43, 140, 60],
      veinColor: [130, 200, 135],
    }
  },
  {
    fileName: 'toxic_thevetia_peruviana_leaf.jpg',
    config: {
      shape: 'linear',
      baseColor: [25, 95, 40],
      veinColor: [160, 210, 140],
    }
  },
  {
    fileName: 'toxic_atropa_belladonna_leaf.jpg',
    config: {
      shape: 'ovate',
      baseColor: [45, 90, 55], // dull dark green with slight purplish undertone
      veinColor: [110, 150, 120],
    }
  },
  {
    fileName: 'toxic_aconitum_napellus_leaf.jpg',
    config: {
      shape: 'palmate',
      segments: 5,
      baseColor: [30, 95, 45],
      veinColor: [100, 175, 110],
    }
  },
  {
    fileName: 'toxic_conium_maculatum_leaf.jpg',
    config: {
      shape: 'compound',
      baseColor: [60, 150, 70],
      veinColor: [140, 210, 150],
    }
  },
  {
    fileName: 'toxic_cicuta_virosa_leaf.jpg',
    config: {
      shape: 'compound',
      baseColor: [48, 135, 58],
      veinColor: [125, 195, 130],
    }
  },
  {
    fileName: 'toxic_euphorbia_tirucalli_leaf.jpg',
    config: {
      shape: 'pencil',
      baseColor: [70, 160, 65],
      veinColor: [130, 205, 125],
    }
  },
  {
    fileName: 'toxic_plumeria_rubra_leaf.jpg',
    config: {
      shape: 'ovate',
      baseColor: [30, 105, 45],
      veinColor: [180, 225, 150], // prominent pale lateral parallel veins
    }
  },
  {
    fileName: 'toxic_catharanthus_roseus_leaf.jpg',
    config: {
      shape: 'ovate',
      baseColor: [35, 115, 50],
      veinColor: [210, 240, 190], // distinct whitish midrib
    }
  },
  {
    fileName: 'toxic_alocasia_macrorrhizos_leaf.jpg',
    config: {
      shape: 'arrowhead',
      baseColor: [40, 125, 52],
      veinColor: [150, 215, 140],
    }
  },
  {
    fileName: 'toxic_strychnos_nux_vomica_leaf.jpg',
    config: {
      shape: 'ovate',
      baseColor: [30, 100, 45],
      veinColor: [140, 195, 130],
    }
  },
  {
    fileName: 'toxic_digitalis_purpurea_leaf.jpg',
    config: {
      shape: 'ovate',
      baseColor: [60, 120, 65], // soft rugose hairy appearance
      veinColor: [135, 185, 140],
    }
  },
  {
    fileName: 'toxic_zantedeschia_aethiopica_leaf.jpg',
    config: {
      shape: 'arrowhead',
      hasWhiteSpeckles: true, // typical Calla lily white speckling
      baseColor: [35, 110, 50],
      veinColor: [125, 185, 130],
    }
  },
  {
    fileName: 'toxic_philodendron_hederaceum_leaf.jpg',
    config: {
      shape: 'cordate',
      baseColor: [25, 95, 40], // glossy deep green heart
      veinColor: [110, 180, 120],
    }
  }
];

const allSpecs = [...newHealthyLeaves, ...newDiseasedLeaves, ...newPoisonousLeaves];
console.log(`Generating ${allSpecs.length} authentic botanical leaf images into ${targetDir}...`);

for (const spec of allSpecs) {
  const filePath = path.join(targetDir, spec.fileName);
  const jpegBytes = renderLeaf(spec.config);
  fs.writeFileSync(filePath, jpegBytes);
  console.log(`Saved: ${spec.fileName} (${jpegBytes.length} bytes)`);
}

console.log('Successfully generated all new botanical leaf images!');
