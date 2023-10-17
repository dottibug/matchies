'use client';
import { useState, useEffect } from 'react';

export function useCheckForWin(matchedLength, cardsLength) {
  const [win, setWin] = useState(false);

  useEffect(() => {
    if (matchedLength === 0) return;

    if (matchedLength !== cardsLength) {
      setWin(false);
      return;
    }

    setWin(true);
    console.log('--- WIN ---');
  }, [matchedLength, cardsLength]);

  return [win, setWin];
}
