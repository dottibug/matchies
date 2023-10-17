'use client';
import { useState, useEffect } from 'react';
import { decks } from '@/components/decks/decks';

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
  }
  return cards;
}

export function useCreateGameCards(gameLevel, gameDeck) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const pairs = gameLevel.cards / 2;
    const deckCards = decks.find((deck) => deck.theme === gameDeck).cards;

    // Randomly select a unique set of cards (equal to 'pairs') from deckCards
    const getRandomNum = () => Math.floor(Math.random() * deckCards?.length);

    const randomNums = new Set();

    while (randomNums.size !== pairs) randomNums.add(getRandomNum());

    // Double the randomly selected cards to create pairs
    const randomCards = [...randomNums, ...randomNums].map((num) => deckCards[num]);

    const gameCards = randomCards.map((card) => {
      const { name, imagePath, imageAlt } = card;
      return {
        name,
        imagePath,
        imageAlt,
        flipped: false,
        matched: false,
      };
    });

    const shuffledGameCards = shuffleCards(gameCards);

    setCards(shuffledGameCards);
  }, [gameLevel, gameDeck]);

  return [cards, setCards];
}
