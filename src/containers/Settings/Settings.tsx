import React from "react";
import { Box, Flex } from "reflexbox";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { CenteredBlock } from "@components/CenteredBlock";

import { Difficult } from "./components/Difficult";
import { DifficultType } from "./types";
import { getDifficult, setDiffucult } from "./redux";

const StyledLink = styled(NavLink)`
  margin-bottom: 10px;
`;

const DIFFICULTS = [
  {
    name: "easy",
    value: 1,
  },
  {
    name: "normal",
    value: 2,
  },
  {
    name: "hard",
    value: 3,
  },
];

export const Settings = () => {
  const dispatch = useDispatch();
  const activeDifficult = useSelector(getDifficult);

  const handleChange = (value: DifficultType) => {
    dispatch(setDiffucult(value));
  };

  return (
    <CenteredBlock>
      <Flex flexDirection="column" alignItems="center">
        <h2>Settings</h2>
        <Flex flexDirection="column" alignItems="center">
          <Box mb="10px">
            <Difficult
              list={DIFFICULTS}
              activeValue={activeDifficult.value}
              onChange={handleChange}
            />
          </Box>
          <StyledLink to="/home">Back</StyledLink>
        </Flex>
      </Flex>
    </CenteredBlock>
  );
};
