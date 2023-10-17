import { createContext, useState } from 'react';
import { levels } from '../config/gameConfig';

const initialDecks = ['ocean', 'camping', 'sweets'];

export const GameContext = createContext({
  gameLevel: levels[0],
  setGameLevel: () => {},
});

export default function GameProvider({ children }) {
  // STATE
  const [gameLevel, setGameLevel] = useState(levels[0]);
  const [gameDeck, setGameDeck] = useState(initialDecks[0]);

  const game = { gameLevel, setGameLevel, gameDeck, setGameDeck };

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
}
