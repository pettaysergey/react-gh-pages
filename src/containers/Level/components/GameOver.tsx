import React from "react";
import { Box } from "reflexbox";
import styled from "styled-components";

import { Button } from "@components/Button";
import { CenteredBlock } from "@components/CenteredBlock";

type Props = {
  isWin: boolean;
  onClick: () => void;
};

const StyledText = styled(Box)`
  text-align: center;
`;

export const GameOver = ({ isWin, onClick }: Props) => {
  return (
    <CenteredBlock>
      <StyledText mb="10px">{isWin ? "You Win" : "Game Over"}</StyledText>
      <Button onClick={onClick}>Play Again?</Button>
    </CenteredBlock>
  );
};
