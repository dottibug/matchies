import { useEffect, useState } from 'react';

export function useCheckForMatch(flippedCards, setFlippedCards, cards, setCards) {
  // STATE
  const [matchedCards, setMatchedCards] = useState([]);
  const [checkingMatch, setCheckingMatch] = useState(false);

  useEffect(() => {
    if (flippedCards.length !== 2) return;

    setCheckingMatch(true);
    const flippedCardOne = flippedCards[0];
    const flippedCardTwo = flippedCards[1];
    const matchedPair = flippedCardOne.name === flippedCardTwo.name;

    // cardProperty can be 'matched' or 'flipped'
    const updateCards = (cardProperty) => {
      const updated = cards.map((card, i) => {
        if (i === flippedCardOne.index || i === flippedCardTwo.index)
          return cardProperty === 'matched'
            ? { ...card, matched: true }
            : { ...card, flipped: false };
        return card;
      });
      return updated;
    };

    // MATCH
    if (matchedPair) {
      const updatedCards = updateCards('matched');

      setCards(updatedCards);
      setMatchedCards((matchedCards) => [
        ...matchedCards,
        flippedCardOne,
        flippedCardTwo,
      ]);
      setFlippedCards([]);
      setCheckingMatch(false);
      return;
    }

    // NOT A MATCH
    const timeoutID = setTimeout(() => {
      const updatedCards = updateCards('flipped');
      setCards(updatedCards);
      setFlippedCards([]);
    }, 2000);

    return () => {
      clearTimeout(timeoutID);
      setCheckingMatch(false);
    };
  }, [cards, flippedCards, setCards, setFlippedCards]);

  return [checkingMatch, matchedCards];
}
