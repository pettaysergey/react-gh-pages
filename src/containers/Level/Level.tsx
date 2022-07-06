import React, { useState } from "react";
import styled from "styled-components/macro";

import { usePosition } from "./hooks/usePosition";
import { useParams } from "./hooks/useParams";
import { useLevelParams } from "./hooks/useLevelParams";
import { Duck } from "./components/Duck";
import { GameOver } from "./components/GameOver";
import { Box } from "reflexbox";
import { Dashboard } from "./components/Dashboard";

export const Level = () => {
  const { duckSpeed } = useParams();
  const {
    ammo,
    ducks,
    level,
    isWin,
    isOver,
    globalScore,
    handleNewGame,
    handleSetDucks,
    handleChangeAmmo,
  } = useLevelParams();

  const handleClick = () => {
    handleSetDucks();
  };

  return (
    <Box height="100%">
      {isOver || isWin ? (
        <GameOver onClick={handleNewGame} isWin={isWin} />
      ) : (
        <Duck
          key={globalScore}
          duckSpeed={duckSpeed}
          handleClick={handleClick}
          handleShoot={handleChangeAmmo}
        />
      )}
      <Dashboard score={globalScore} ducks={ducks} ammo={ammo} level={level} />
    </Box>
  );
};
