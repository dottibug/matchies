import styles from './app.module.css';
import { useState } from 'react';
import Cards from './components/cards/cards';
import Home from './components/home/home';
import GameSettings from './components/gameSettings/gameSettings';
import { useCreateDeck } from './hooks/useCreateDeck';

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

  const [cards, setCards] = useCreateDeck(startGame, level, deck);

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
      {startGame && cards.length && <Cards cards={cards} setCards={setCards} />}
    </div>
  );
}
