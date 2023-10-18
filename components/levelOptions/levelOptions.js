'use client';
import styles from './levelOptions.module.css';
import { useContext } from 'react';
import { GameContext } from '@/context/gameContext';
import { levels } from '@/config/gameConfig';
import Button from '@/components/buttons/button';

export default function LevelOptions() {
  // CONTEXT
  const { gameLevel, setGameLevel } = useContext(GameContext);

  // HANDLERS
  const handleClickLevel = (e) => {
    const levelName = e.currentTarget.dataset.levelName;
    const levelCards = +e.currentTarget.dataset.levelCards;
    setGameLevel((prevState) => ({ ...prevState, name: levelName, cards: levelCards }));
  };

  // STYLE
  const levelButtonStyle = (name) => {
    if (name !== gameLevel.name) return;
    return {
      backgroundColor: '#EA7469',
      borderColor: '#EA7469',
    };
  };

  return (
    <div className={styles['level-options']}>
      {levels.map((level) => {
        const { name, cards } = level;
        return (
          <Button
            onClick={handleClickLevel}
            size="large"
            data-level-name={name}
            data-level-cards={cards}
            key={name}
            style={levelButtonStyle(name)}>
            {name}
          </Button>
        );
      })}
    </div>
  );
}
