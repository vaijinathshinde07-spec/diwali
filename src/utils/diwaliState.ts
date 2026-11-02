export interface DiyaItem {
  id: string;
  name: string;
  meaning: string;
  blessing: string;
  isLit: boolean;
  color: string;
}

export const INITIAL_DIYAS: DiyaItem[] = [
  {
    id: 'love',
    name: 'Diya of Eternal Love',
    meaning: 'Unconditional warmth and deep affection',
    blessing: 'May your heart always be wrapped in gentle love, understanding, and infinite warmth, Rutuja.',
    isLit: true,
    color: '#F59E0B',
  },
  {
    id: 'joy',
    name: 'Diya of Radiant Joy',
    meaning: 'The smile that lights up every room',
    blessing: 'May every morning bring you a new reason to smile that sparkling smile that makes everything brighter.',
    isLit: true,
    color: '#FBBF24',
  },
  {
    id: 'dreams',
    name: 'Diya of Golden Dreams',
    meaning: 'Ambitions turning into realities',
    blessing: 'May every aspiration you hold close to your heart blossom into the most beautiful reality this year.',
    isLit: false,
    color: '#FDE047',
  },
  {
    id: 'laughter',
    name: 'Diya of Sweet Laughter',
    meaning: 'Unfiltered happiness and fun',
    blessing: 'May life fill your days with spontaneous giggles, sweet conversations, and carefree joy.',
    isLit: false,
    color: '#FB923C',
  },
  {
    id: 'serenity',
    name: 'Diya of Peace & Grace',
    meaning: 'Tranquil soul and inner sparkle',
    blessing: 'May a gentle calm follow your footsteps, keeping you protected, cherished, and serene.',
    isLit: false,
    color: '#F472B6',
  },
];

export interface RomanticToken {
  id: string;
  title: string;
  subtitle: string;
  detail: string;
  iconName: string;
}

export const ROMANTIC_TOKENS: RomanticToken[] = [
  {
    id: 'starlight',
    title: 'The Starlight Charm',
    subtitle: 'Brighter than a thousand diyas',
    detail: 'No fireworks or lamps compare to the sparkle in your eyes when you are truly happy, Rutuja.',
    iconName: 'Sparkles',
  },
  {
    id: 'promise',
    title: 'The Golden Promise',
    subtitle: 'To always celebrate you',
    detail: 'A promise to always cherish the sweet, kind, and extraordinarily special human you are.',
    iconName: 'Heart',
  },
  {
    id: 'magic',
    title: 'A Touch of Magic',
    subtitle: 'Ordinary moments made unforgettable',
    detail: 'Simply having you in this world turns simple days into magical celebrations.',
    iconName: 'Flame',
  },
];

export interface LanternWish {
  id: string;
  text: string;
  author: string;
  createdAt: number;
}

export const PRESET_WISHES: string[] = [
  'May Rutuja’s year ahead be filled with boundless laughter and dreams fulfilled.',
  'May every diya lit tonight carry health, happiness, and peace to your doorstep.',
  'Wishing you the sweetest celebrations with endless sweets, sparkle, and love.',
  'May your heart always feel adored and cherished.',
];

/**
 * Pure functions to manage Diwali ritual state
 */
export function toggleDiyaState(diyas: DiyaItem[], id: string): DiyaItem[] {
  return diyas.map((d) => (d.id === id ? { ...d, isLit: !d.isLit } : d));
}

export function lightAllDiyas(diyas: DiyaItem[]): DiyaItem[] {
  return diyas.map((d) => ({ ...d, isLit: true }));
}

export function calculateLitPercentage(diyas: DiyaItem[]): number {
  if (diyas.length === 0) return 0;
  const litCount = diyas.filter((d) => d.isLit).length;
  return Math.round((litCount / diyas.length) * 100);
}

export function areAllDiyasLit(diyas: DiyaItem[]): boolean {
  return diyas.length > 0 && diyas.every((d) => d.isLit);
}

export function createLanternWish(text: string, customAuthor = 'Rutuja'): LanternWish {
  return {
    id: `lantern-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    text: text.trim(),
    author: customAuthor,
    createdAt: Date.now(),
  };
}
