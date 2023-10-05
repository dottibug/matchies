import styles from './app.module.css';
import { useState, useEffect } from 'react';
import { shuffleCards } from './helpers/shuffleCards';
import Levels from './components/levels/levels';
import Cards from './components/cards/cards';

/* 
TODO 
• TS
*/

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

export default function App() {
  // STATE
  const [level, setLevel] = useState(levels.beginner);
  const [cards, setCards] = useState([]);

  // EFFECTS
  // Create Deck
  useEffect(() => {
    const pairs = level / 2;

    // Temp card array for dev
    const tempCardArray = Array.from({ length: level }, (card, i) => {
      return {
        name: i + 1 <= pairs ? i + 1 : i + 1 - pairs,
        flipped: false,
        matched: false,
      };
    });

    // Shuffle cards
    const shuffledDeck = shuffleCards(tempCardArray);

    setCards(shuffledDeck);
  }, [level]);

  return (
    <div className={styles['app']}>
      {/* TITLE */}
      <h1>Matchies</h1>

      {/* LEVEL BUTTONS */}
      <Levels setLevel={setLevel} />

      {/* CARDS */}
      {cards.length && <Cards cards={cards} setCards={setCards} />}
    </div>
  );
}
