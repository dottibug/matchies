import styles from './cards.module.css';
import { useState, useEffect } from 'react';
import { useCheckForMatch } from '../../hooks/useCheckForMatch';

export default function Cards({ cards, setCards }) {
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

    console.log('--- WIN ---');
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

  const cardsStyle = {
    gridTemplateColumns: cards.length < 18 ? `repeat (4, 1fr)` : `repeat(6, 1fr)`,
  };

  console.log('cards.lenght: ', cards.length);

  return (
    <div className={styles['cards']} style={cardsStyle}>
      {cards.map((card, i) => {
        const { name, src, matched, flipped } = card;

        return (
          <button
            key={`${name}-${i}`}
            className={styles['card']}
            style={{
              backgroundColor: matched || flipped ? 'white' : 'mediumseagreen',
            }}
            onClick={handleClickCard}
            data-card-name={name}
            data-card-index={i}
            disabled={flipped || matched || checkingMatch || win}>
            {flipped || matched ? <img src={src} alt={name} /> : ''}
          </button>
        );
      })}
    </div>
  );
}
