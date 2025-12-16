// Difficulty levels for the game (how many pairs of cards to match)
export type Level = 'easy' | 'medium' | 'hard';
export type Pairs = 6 | 8 | 12;

// Grid size depends on the difficulty level
export type Grid = {
  rows: number;
  cols: number;
};

// Difficulty configuration: the number of pairs and the grid size for each difficulty level
export type DifficultyConfig = {
  pairs: Pairs;
  grid: Grid;
};
