'use client';
import styles from './game.module.css';
import { useContext, useState } from 'react';
import { GameContext } from '@/context/gameContext';
import { decks } from '@/components/decks/decks';
import { useCreateGameCards } from '@/hooks/useCreateGameCards';
import Image from 'next/image';
import { useCheckForMatch } from '@/hooks/useCheckForMatch';
import { useCheckForWin } from '@/hooks/useCheckForWin';

export default function Game() {
  // CONTEXT
  const { gameLevel, gameDeck } = useContext(GameContext);

  // STATE
  const [cards, setCards] = useCreateGameCards(gameLevel, gameDeck);
  const [flippedCards, setFlippedCards] = useState([]);

  const [checkingMatch, matchedCards] = useCheckForMatch(
    flippedCards,
    setFlippedCards,
    cards,
    setCards
  );

  const [win, setWin] = useCheckForWin(matchedCards.length, cards.length);

  // VARIABLES
  const cardBack = decks.find((deck) => deck.theme === gameDeck).cardBack;

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

  // STYLE
  const cardStyle = (matched, flipped) => {
    return {
      backgroundColor: matched || flipped ? 'white' : `${cardBack.backgroundColor}50`,
    };
  };

  const cardImageWrapperStyle = (matched, flipped) => {
    return {
      width: matched || flipped ? '12rem' : '14rem',
      height: matched || flipped ? '12rem' : '14rem',
    };
  };

  return (
    <div className={styles['cards']}>
      {cards.map((card, i) => {
        const { name, imagePath, imageAlt, flipped, matched } = card;

        // TODO change these from buttons to div, but need to come up with an idea for disabling clicking on cards
        return (
          <button
            key={`${name}=${i}`}
            className={styles['card']}
            style={cardStyle(matched, flipped)}
            onClick={handleClickCard}
            data-card-name={name}
            data-card-index={i}
            disabled={flipped || matched || checkingMatch || win}>
            <div
              className={styles['card-image-wrapper']}
              style={cardImageWrapperStyle(matched, flipped)}>
              <Image
                src={flipped || matched ? imagePath : cardBack.imagePath}
                alt={flipped || matched ? imageAlt : cardBack.imageAlt}
                fill={true}
                sizes="auto"
                quality={100}
                priority
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
