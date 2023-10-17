'use client';
import styles from './gameSettings.module.css';
import LevelOptions from '@/components/levelOptions/levelOptions';
import DeckOptions from '@/components/deckOptions/deckOptions';
import Link from 'next/link';

// select a level
// select a deck (first from all, but then implmenent only from the available decks in database OR only the first three decks for users that don't have an account/aren't signed in)

const initialDecks = ['ocean', 'camping', 'sweets'];

export default function GameSettings() {
  return (
    <div className={styles['game-settings']}>
      <h1>Game Settings</h1>
      <LevelOptions />
      <DeckOptions />
      <Link href="http://localhost:3000/game" className={styles['btn-play']}>
        play
      </Link>
    </div>
  );
}
