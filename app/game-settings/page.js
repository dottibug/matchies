'use client';
import styles from './gameSettings.module.css';
import LevelOptions from '@/components/levelOptions/levelOptions';
import DeckOptions from '@/components/deckOptions/deckOptions';
import LinkButton from '@/components/buttons/linkButton';

// select a level
// select a deck (first from all, but then implmenent only from the available decks in database OR only the first three decks for users that don't have an account/aren't signed in)

const initialDecks = ['ocean', 'camping', 'sweets'];

export default function GameSettings() {
  return (
    <div className={styles['game-settings']}>
      <h1>Game Settings</h1>
      <LevelOptions />
      <DeckOptions />
      <LinkButton href="/game" size="large" appRoute={true}>
        play
      </LinkButton>
    </div>
  );
}
