import styles from './app.module.css';
import { useState, useEffect } from 'react';
import Cards from './components/cards/cards';
import Home from './components/home/home';
import GameSettings from './components/gameSettings/gameSettings';
import { useCreateDeck } from './hooks/useCreateDeck';
import { supabase } from './supabase/supabaseClient';

/* 
TODO 
- cards/setCards should exist only in the Cards component (and I think Cards would be better named as Game)
• TS
*/

export default function App() {
  // STATE
  const [session, setSession] = useState(null);
  const [gameSettings, setGameSettings] = useState(null);
  const [startGame, setStartGame] = useState(false);
  const [level, setLevel] = useState(null);
  const [deck, setDeck] = useState(null);
  const [cards, setCards] = useCreateDeck(startGame, level, deck);

  // TODO as its own hook exporting [session, setSession]
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // HANDLERS
  const handleStartGame = () => {
    setGameSettings(false);
    setStartGame(true);
  };

  return (
    <div className={styles['app']}>
      {/* TITLE */}
      <h1>Matchies</h1>

      {/* SUPABASE TEST */}
      <>
        {!session && <div>Not logged in</div>}
        {session && <div>Logged in!</div>}
      </>

      {/* HOME */}
      {!startGame && !gameSettings && (
        <Home setGameSettings={setGameSettings} session={session} />
      )}

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
