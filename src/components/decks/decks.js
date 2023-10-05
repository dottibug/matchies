import styles from './decks.module.css';
import Button from '../ui/button';

const tempDeckOptions = [
  { name: 'pink' },
  { name: 'cornflowerblue' },
  { name: 'mediumseagreen' },
  { name: 'mediumpurple' },
  { name: 'lemonchiffon' },
  { name: 'coral' },
];

export default function Decks({ deck, setDeck }) {
  // HANDLERS
  const handleClickDeckOption = (e) => setDeck(e.target.value);

  //   STYLE
  const tempDeckStyle = (option) => {
    return { border: deck === option.name ? '2px solid black' : 'none' };
  };

  return (
    <div className={styles['deck-options']}>
      {tempDeckOptions.map((option) => (
        <Button
          onClick={handleClickDeckOption}
          key={option.name}
          value={option.name}
          style={tempDeckStyle(option)}>
          {option.name}
        </Button>
      ))}
    </div>
  );
}
