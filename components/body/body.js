'use client';
import GameProvider from '@/context/gameContext';

export default function Body({ children }) {
  return (
    <GameProvider>
      <body>
        {children}
        <div id="modal" />
      </body>
    </GameProvider>
  );
}
