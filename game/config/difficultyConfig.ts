import type { Level, DifficultyConfig } from '../models/Difficulty';

export const DIFFICULTY_CONFIG: Record<Level, DifficultyConfig> = {
  easy: {
    pairs: 6,
    grid: {
      rows: 4,
      cols: 3,
    },
  },
  medium: {
    pairs: 8,
    grid: {
      rows: 4,
      cols: 4,
    },
  },
  hard: {
    pairs: 12,
    grid: {
      rows: 4,
      cols: 6,
    },
  },
};
