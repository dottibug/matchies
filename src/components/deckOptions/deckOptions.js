import styles from './deckOptions.module.css';
import { decks } from '../../decks/decks';
import { getCardBackgroundColor } from '../../helpers/getCardBackgroundColor';

export default function DeckOptions({ deck, setDeck }) {
  // HANDLERS
  const handleClickDeckOption = (e) => {
    const selectedDeck = decks.find(
      (deck) => deck.theme === e.currentTarget.dataset.theme
    );
    setDeck(selectedDeck);
  };

  //   STYLE
  const deckStyle = (color, deckOption) => {
    return {
      backgroundColor: getCardBackgroundColor(color),
      border:
        deck?.theme === deckOption.theme ? '2px solid black' : '2px solid lightgray',
    };
  };

  return (
    <div className={styles['deck-options']}>
      {decks.map((deckOption) => {
        const { theme, cardBack } = deckOption;

        return (
          <div
            key={theme}
            data-theme={theme}
            onClick={handleClickDeckOption}
            className={styles['deck-option']}
            style={deckStyle(cardBack.backgroundColor, deckOption)}>
            <img src={cardBack.image} alt={theme} />
            <p className={styles['deck-theme']}>{theme}</p>
          </div>
        );
      })}
    </div>
  );
}
