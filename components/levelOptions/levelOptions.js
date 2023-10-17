'use client';
import styles from './levelOptions.module.css';
import { useContext } from 'react';
import { GameContext } from '@/context/gameContext';
import { levels } from '@/config/gameConfig';

export default function LevelOptions() {
  // CONTEXT
  const { gameLevel, setGameLevel } = useContext(GameContext);

  // HANDLERS
  const handleClickLevel = (e) => {
    const levelName = e.currentTarget.dataset.levelName;
    const levelCards = +e.currentTarget.dataset.levelCards;
    setGameLevel((prevState) => ({ ...prevState, name: levelName, cards: levelCards }));
  };

  const levelOptionClass = (name) => {
    return [styles['level-option'], styles[name === gameLevel.name ? 'active' : '']].join(
      ' '
    );
  };

  return (
    <div className={styles['level-options']}>
      {levels.map((level) => {
        const { name, cards } = level;
        return (
          <div
            onClick={handleClickLevel}
            data-level-name={name}
            data-level-cards={cards}
            key={name}
            className={levelOptionClass(name)}>
            {name}
          </div>
        );
      })}
    </div>
  );
}
