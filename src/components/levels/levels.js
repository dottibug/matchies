import styles from './levels.module.css';

// 8, 12, 16, 20, 24, 32, 36
const levelsArray = [
  { name: 'beginner', cards: 8 }, // 4 pairs - 2 rows of 4
  { name: 'easy', cards: 12 }, // 6 pairs - 3 rows of 4
  { name: 'medium', cards: 16 }, // 8 pairs - 4 rows of 4
  { name: 'hard', cards: 24 }, // 12 pairs - 6 rows of 4
];

const levels = {
  beginner: 8,
  easy: 12,
  medium: 16,
  hard: 24,
};

export default function Levels({ setLevel }) {
  // HANDLERS
  const handleClickLevel = (e) => setLevel(levels[e.target.value]);

  return (
    <div className={styles['level-buttons']}>
      {levelsArray.map((level) => (
        <button
          className={styles['btn-level']}
          onClick={handleClickLevel}
          key={level.name}
          value={level.name}>
          {level.name}
        </button>
      ))}
    </div>
  );
}
