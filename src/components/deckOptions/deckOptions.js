import styles from './deckOptions.module.css';
import { decks } from '../../decks/decks';

// TODO currently using the first image of each deck theme but need to use the card back design (when I've found/created them)

export default function DeckOptions({ deck, setDeck }) {
  // HANDLERS
  const handleClickDeckOption = (e) => {
    const selectedDeck = decks.find(
      (deck) => deck.theme === e.currentTarget.dataset.theme
    );

    setDeck(selectedDeck);
  };

  //   STYLE
  const tempDeckStyle = (option) => {
    return {
      border: deck?.theme === option.theme ? '2px solid black' : '2px solid lightgray',
    };
  };

  return (
    <div className={styles['deck-options']}>
      {decks.map((deck) => {
        const { theme, cards } = deck;

        return (
          <div
            key={theme}
            data-theme={theme}
            onClick={handleClickDeckOption}
            className={styles['deck-option']}
            style={tempDeckStyle(deck)}>
            <img src={cards[0].src} alt={cards[0].name} />
            <p className={styles['deck-theme']}>{theme}</p>
          </div>
        );
      })}
    </div>
  );
}
