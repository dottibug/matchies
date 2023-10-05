import styles from './app.module.css';
import { useState, useEffect } from 'react';
import { shuffleCards } from './helpers/shuffleCards';
import Cards from './components/cards/cards';
import Home from './components/home/home';
import GameSettings from './components/gameSettings/gameSettings';

/* 
TODO 
• TS
*/

export default function App() {
  // STATE
  const [gameSettings, setGameSettings] = useState(null);
  const [startGame, setStartGame] = useState(false);

  const [level, setLevel] = useState(null);
  const [deck, setDeck] = useState(null);
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

  // HANDLERS
  const handleStartGame = () => {
    setGameSettings(false);
    setStartGame(true);
  };

  return (
    <div className={styles['app']}>
      {/* TITLE */}
      <h1>Matchies</h1>

      {/* HOME */}
      {!startGame && !gameSettings && <Home setGameSettings={setGameSettings} />}

      {/* GAME SETTINGS */}
      {gameSettings && (
        <GameSettings
          level={level}
          setLevel={setLevel}
          deck={deck}
          setDeck={setDeck}
          handleStartGame={handleStartGame}
        />
      )}

      {/* GAME */}
      {startGame && cards.length && (
        <Cards deck={deck} cards={cards} setCards={setCards} />
      )}
    </div>
  );
}
