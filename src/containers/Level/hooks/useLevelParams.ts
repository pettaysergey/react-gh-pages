import { useEffect, useState } from "react";

export const LEVELS = [
  {
    levelId: 0,
    ducks: 2,
    ammo: 4,
  },
  {
    levelId: 1,
    ducks: 4,
    ammo: 6,
  },
  {
    levelId: 2,
    ducks: 6,
    ammo: 8,
  },
];

export const useLevelParams = () => {
  const [time, setTime] = useState();
  const [level, setLevel] = useState(LEVELS[0].levelId);
  const [ammo, setAmmo] = useState(LEVELS[level].ammo);
  const [ducks, setDucks] = useState(LEVELS[level].ducks);
  const [score, setScore] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [globalScore, setGlobalScore] = useState(0);

  // Счетчик уток
  const handleSetDucks = () => {
    setAmmo(ammo - 1);
    setDucks(ducks - 1);
    setScore(score + 1);
    setGlobalScore(globalScore + 1);
  };

  // Новый уровень
  const handleStartNewLevel = () => {
    if (LEVELS[level + 1]) {
      return setLevel(level + 1);
    }

    setIsWin(true);
  };

  // Новая игра
  const handleNewGame = () => {
    setIsOver(false);
    setIsWin(false);
    setLevel(LEVELS[0].levelId);
    setScore(0);
    setGlobalScore(0);
    setAmmo(LEVELS[0].ammo);
  };

  const handleChangeAmmo = () => {
    setAmmo(ammo - 1);
  };

  useEffect(() => {
    if (ducks === 0) {
      handleStartNewLevel();
    }
  }, [ducks]);

  useEffect(() => {
    setDucks(LEVELS[level].ducks);
    setAmmo(LEVELS[level].ammo);
    setScore(0);
  }, [level]);

  useEffect(() => {
    if (!ammo && ducks) {
      setIsOver(true);
    }
  }, [ammo, ducks]);

  return {
    ammo,
    ducks,
    level: level + 1,
    score,
    isWin,
    isOver,
    globalScore,
    handleNewGame,
    handleSetDucks,
    handleChangeAmmo,
    handleStartNewLevel,
  };
};
