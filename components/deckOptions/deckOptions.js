import styles from './deckOptions.module.css';
import { useContext } from 'react';
import { GameContext } from '@/context/gameContext';
import { decks } from '@/components/decks/decks';
import Image from 'next/image';

const initialDecks = ['ocean', 'camping', 'sweets'];

export default function DeckOptions() {
  // console.log('-- DECKS: ', decks);
  // CONTEXT
  const { gameDeck, setGameDeck } = useContext(GameContext);

  // HANDLERS
  const handleClickDeck = (e) => {
    const deckTheme = e.currentTarget.dataset.theme;
    setGameDeck((prevState) => deckTheme);
  };

  // CLASS
  const deckOptionImageWrapperClass = (theme) =>
    [
      styles['deck-option-image-wrapper'],
      styles[gameDeck === theme ? 'active' : ''],
    ].join(' ');

  console.log('GAME DECK: ', gameDeck);

  return (
    <div className={styles['deck-options']}>
      {decks.map((deck) => {
        const { theme, cardBack } = deck;

        return (
          <div
            onClick={handleClickDeck}
            key={theme}
            data-theme={theme}
            className={styles['deck-option']}>
            <div className={deckOptionImageWrapperClass(theme)}>
              <Image
                src={cardBack.imagePath}
                alt={cardBack.imageAlt}
                width={140}
                height={140}
              />
            </div>
            <p className={styles['deck-theme']}>{theme}</p>
          </div>
        );
      })}
    </div>
  );
}
