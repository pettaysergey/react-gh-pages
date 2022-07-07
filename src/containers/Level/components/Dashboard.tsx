import React from "react";
import { Box, Flex } from "reflexbox/styled-components";
import styled from "styled-components/macro";
import bullet from "../bullet.png";

type Props = {
  ammo: number;
  ducks: number;
  score: number;
  level: number;
};

const StyledContainer = styled(Flex)`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-bottom: 24px;
  justify-content: space-around;
`;

const StyledBlock = styled(Box)`
  border: 2px solid #6fde67;
  background-color: #000;
  padding: 8px;
  color: #fff;
`;

export const Dashboard = ({ ammo, ducks, level, score }: Props) => {
  return (
    <StyledContainer>
      <StyledBlock>
        <Box mb="10px">Level</Box>
        <Box textAlign="center">{level}</Box>
      </StyledBlock>
      <StyledBlock>
        <Box mb="10px">Ammo</Box>
        <Flex justifyContent="center">
          {[...new Array(ammo)].map((_, i) => (
            <Box mr="4px" key={i}>
              <img src={bullet} key={i} alt="bullet" width="10px" />
            </Box>
          ))}
        </Flex>
      </StyledBlock>
      <StyledBlock>
        <Box mb="10px">Ducks</Box>
        <Box textAlign="center">{ducks}</Box>
      </StyledBlock>
      <StyledBlock>
        <Box mb="10px">Score</Box>
        <Box textAlign="center">{score}</Box>
      </StyledBlock>
    </StyledContainer>
  );
};
