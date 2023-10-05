import styles from './gameSettings.module.css';
import Levels from '../levels/levels';
import Decks from '../decks/decks';
import Button from '../ui/button';

export default function GameSettings({
  level,
  setLevel,
  deck,
  setDeck,
  handleStartGame,
}) {
  // HELPERS
  const levelIsSelected = Boolean(level);
  const deckIsSelected = Boolean(deck);

  return (
    <div className={styles['game-settings']}>
      <Levels level={level} setLevel={setLevel} />
      <Decks deck={deck} setDeck={setDeck} />

      <Button
        onClick={handleStartGame}
        disabled={levelIsSelected && deckIsSelected ? false : true}>
        Start Game
      </Button>
    </div>
  );
}
