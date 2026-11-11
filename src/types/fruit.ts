export type SeasonTag = 'গ্রীষ্ম' | 'বর্ষা' | 'শরৎ' | 'হেমন্ত' | 'শীত' | 'বসন্ত' | 'সারা বছর';
export type AvailabilityTag = 'বাংলাদেশে উৎপাদিত' | 'আমদানিকৃত' | 'সীমিত প্রাপ্যতা';

export interface NutritionData {
  portion: string;
  caloriesKcal: number;
  waterG?: number;
  carbohydratesG: number;
  fiberG: number;
  sugarG?: number;
  proteinG: number;
  fatG: number;
  vitaminCMg?: number;
  potassiumMg?: number;
  calciumMg?: number;
  ironMg?: number;
  source: string;
  sourceUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SourceItem {
  title: string;
  publisher: string;
  url: string;
  accessDate: string;
}

export interface Fruit {
  slug: string;
  nameBn: string;
  nameEn: string;
  aliases: string[];
  scientificName: string;
  seasonTags: SeasonTag[];
  availabilityTags: AvailabilityTag[];
  fruitGroupTags: string[];
  introduction: string;
  botanicalDescription: string;
  availabilityAndSeasonality: string;
  nutrition: NutritionData;
  benefits: string[];
  eatingGuidance: string;
  cautions: string[];
  excessConsumption: string;
  buyingAndStorage: string;
  faqs: FAQItem[];
  sources: SourceItem[];
  verifiedAt: string;
  image: string;
  imageAltBn: string;
  hasCustomPhoto: boolean;
}

