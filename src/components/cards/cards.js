import styles from './cards.module.css';
import { useState, useEffect } from 'react';
import { useCheckForMatch } from '../../hooks/useCheckForMatch';

export default function Cards({ deck, cards, setCards }) {
  // STATE
  const [flippedCards, setFlippedCards] = useState([]);
  const [win, setWin] = useState(false);

  const [checkingMatch, matchedCards] = useCheckForMatch(
    flippedCards,
    setFlippedCards,
    cards,
    setCards
  );

  // CHECK FOR WIN
  useEffect(() => {
    if (matchedCards.length === 0) return;
    if (matchedCards.length === cards.length) setWin(true);
  }, [matchedCards.length, cards.length]);

  // HANDLERS
  const handleClickCard = (e) => {
    const clickedCardName = e.target.dataset.cardName;
    const clickedCardIndex = +e.target.dataset.cardIndex;
    const clickedCard = { name: clickedCardName, index: clickedCardIndex };

    setFlippedCards((flippedCards) => [...flippedCards, clickedCard]);

    const flippedCard = { ...cards[clickedCardIndex], flipped: true };
    const updatedCards = cards.map((card, i) =>
      i === clickedCardIndex ? flippedCard : card
    );

    setCards(updatedCards);
  };

  return (
    <div className={styles['cards']}>
      {cards.map((card, i) => {
        return (
          <button
            key={`${card.name}-${i}`}
            className={styles['card']}
            style={{
              backgroundColor: card.matched || card.flipped ? 'white' : deck,
            }}
            onClick={handleClickCard}
            data-card-name={card.name}
            data-card-index={i}
            disabled={card.flipped || card.matched || checkingMatch || win}>
            {card.flipped || card.matched ? card.name : ''}
          </button>
        );
      })}
    </div>
  );
}
