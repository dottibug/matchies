import { useState, useEffect } from 'react';
import { shuffleCards } from '../helpers/shuffleCards';
import { decks } from '../decks/decks';

export function useCreateDeck(startGame, level = 8, deck = decks[0]) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!startGame) return;
    const pairs = level / 2;
    const deckCards = deck.cards;

    // Randomly select a unique set of cards (equal to 'pairs') from gameDeckCards
    const getRandomNum = () => Math.floor(Math.random() * deckCards?.length);

    const randomNums = new Set();

    while (randomNums.size !== pairs) randomNums.add(getRandomNum());

    // Double the randomly selected cards to create pairs
    const randomCards = [...randomNums, ...randomNums].map((num) => deckCards[num]);

    const gameCards = randomCards.map((card) => {
      const { name, src } = card;
      return {
        name,
        src,
        flipped: false,
        matched: false,
      };
    });

    const shuffledGameCards = shuffleCards(gameCards);
    setCards(shuffledGameCards);
  }, [deck, level, startGame]);

  return [cards, setCards];
}
