import { LeafDisease } from '../types';
import { CEREAL_DISEASES } from './diseases/cereals';
import { SOLANACEOUS_DISEASES } from './diseases/solanaceous';
import { COMMERCIAL_DISEASES } from './diseases/commercial';
import { FRUIT_DISEASES } from './diseases/fruits';
import { VEGETABLE_SPICE_DISEASES } from './diseases/vegetables_spices';

// Combined 130+ verified botanical diseases common in Bangladesh, India and South Asia
export const LEAF_DISEASES: LeafDisease[] = [
  ...CEREAL_DISEASES,
  ...SOLANACEOUS_DISEASES,
  ...COMMERCIAL_DISEASES,
  ...FRUIT_DISEASES,
  ...VEGETABLE_SPICE_DISEASES,
];

// Complete list of plant species supported in the encyclopedia and filter controls
export const PLANT_SPECIES_LIST: string[] = [
  'All',
  'Rice / Paddy',
  'Wheat',
  'Potato',
  'Tomato',
  'Pepper / Chilli',
  'Brinjal / Eggplant',
  'Jute',
  'Mango',
  'Guava',
  'Banana',
  'Citrus (Lemon / Lime / Orange)',
  'Corn / Maize',
  'Mustard / Rapeseed',
  'Lentil / Pulses',
  'Sugarcane',
  'Cucumber / Cucurbits',
  'Papaya',
  'Tea',
  'Betel Leaf / Pan',
  'Onion & Garlic',
  'Ginger & Turmeric',
];

export interface CropInfo {
  id: string;
  nameEn: string;
  nameBn: string;
  emoji: string;
  count: number;
}

export const CROP_CATEGORY_META: CropInfo[] = [
  { id: 'Rice / Paddy', nameEn: 'Rice / Paddy', nameBn: 'ধান', emoji: '🌾', count: 11 },
  { id: 'Wheat', nameEn: 'Wheat', nameBn: 'গম', emoji: '🌾', count: 7 },
  { id: 'Potato', nameEn: 'Potato', nameBn: 'আলু', emoji: '🥔', count: 10 },
  { id: 'Tomato', nameEn: 'Tomato', nameBn: 'টমেটো', emoji: '🍅', count: 10 },
  { id: 'Pepper / Chilli', nameEn: 'Chilli', nameBn: 'মরিচ', emoji: '🌶️', count: 8 },
  { id: 'Brinjal / Eggplant', nameEn: 'Eggplant / Brinjal', nameBn: 'বেগুন', emoji: '🍆', count: 8 },
  { id: 'Jute', nameEn: 'Jute (Golden Fiber)', nameBn: 'পাট', emoji: '🌿', count: 5 },
  { id: 'Mango', nameEn: 'Mango', nameBn: 'আম', emoji: '🥭', count: 7 },
  { id: 'Guava', nameEn: 'Guava', nameBn: 'পেয়ারা', emoji: '🍈', count: 4 },
  { id: 'Banana', nameEn: 'Banana', nameBn: 'কলা', emoji: '🍌', count: 4 },
  { id: 'Citrus (Lemon / Lime / Orange)', nameEn: 'Lemon / Citrus', nameBn: 'লেবু / সাইট্রাস', emoji: '🍋', count: 5 },
  { id: 'Corn / Maize', nameEn: 'Corn / Maize', nameBn: 'ভুট্টা', emoji: '🌽', count: 4 },
  { id: 'Mustard / Rapeseed', nameEn: 'Mustard / Rapeseed', nameBn: 'সরিষা', emoji: '🌼', count: 4 },
  { id: 'Lentil / Pulses', nameEn: 'Lentil / Pulses', nameBn: 'মসুর ও ডাল', emoji: '🌱', count: 4 },
  { id: 'Sugarcane', nameEn: 'Sugarcane', nameBn: 'আখ', emoji: '🎋', count: 4 },
  { id: 'Cucumber / Cucurbits', nameEn: 'Gourds & Cucurbits', nameBn: 'লাউ-শসা-কুমড়া', emoji: '🥒', count: 6 },
  { id: 'Papaya', nameEn: 'Papaya', nameBn: 'পেঁপে', emoji: '🍈', count: 2 },
  { id: 'Tea', nameEn: 'Tea Leaf', nameBn: 'চা পাতা', emoji: '🍵', count: 4 },
  { id: 'Betel Leaf / Pan', nameEn: 'Betel Leaf (Pan)', nameBn: 'পান পাতা', emoji: '🍃', count: 4 },
  { id: 'Onion & Garlic', nameEn: 'Onion & Garlic', nameBn: 'পেঁয়াজ ও রসুন', emoji: '🧅', count: 4 },
  { id: 'Ginger & Turmeric', nameEn: 'Ginger & Turmeric', nameBn: 'আদা ও হলুদ', emoji: '🫚', count: 4 },
];
