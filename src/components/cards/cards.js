import styles from './cards.module.css';
import { useState } from 'react';
import { useCheckForMatch } from '../../hooks/useCheckForMatch';
import { getCardBackgroundColor } from '../../helpers/getCardBackgroundColor';
import { useCheckForWin } from '../../hooks/useCheckForWin';

export default function Cards({ deck, cards, setCards }) {
  // STATE
  const [flippedCards, setFlippedCards] = useState([]);

  const [checkingMatch, matchedCards] = useCheckForMatch(
    flippedCards,
    setFlippedCards,
    cards,
    setCards
  );

  const [win, setWin] = useCheckForWin(matchedCards.length, cards.length);

  // HANDLERS
  const handleClickCard = (e) => {
    const clickedCardName = e.currentTarget.dataset.cardName;
    const clickedCardIndex = +e.currentTarget.dataset.cardIndex;
    const clickedCard = { name: clickedCardName, index: clickedCardIndex };

    setFlippedCards((flippedCards) => [...flippedCards, clickedCard]);

    const flippedCard = { ...cards[clickedCardIndex], flipped: true };
    const updatedCards = cards.map((card, i) =>
      i === clickedCardIndex ? flippedCard : card
    );

    setCards(updatedCards);
  };

  const cardsStyle = {
    gridTemplateColumns: cards.length < 18 ? `repeat (4, 1fr)` : `repeat(6, 1fr)`,
  };

  const cardStyle = (matched, flipped) => {
    return {
      backgroundColor:
        matched || flipped
          ? 'white'
          : getCardBackgroundColor(deck.cardBack.backgroundColor),
    };
  };

  return (
    <div className={styles['cards']} style={cardsStyle}>
      {cards.map((card, i) => {
        const { name, image, matched, flipped } = card;

        return (
          <button
            key={`${name}-${i}`}
            className={styles['card']}
            style={cardStyle(matched, flipped)}
            onClick={handleClickCard}
            data-card-name={name}
            data-card-index={i}
            disabled={flipped || matched || checkingMatch || win}>
            {flipped || matched ? (
              <img src={image} alt={name} />
            ) : (
              <img src={deck.cardBack.image} alt={deck.theme} />
            )}
          </button>
        );
      })}
    </div>
  );
}
