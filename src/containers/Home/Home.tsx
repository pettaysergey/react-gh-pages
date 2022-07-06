import React from "react";
import { Box, Flex } from "reflexbox";
import styled from "styled-components/macro";

import { CenteredBlock } from "@components/CenteredBlock";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  margin-bottom: 10px;
`;

export const Home = () => {
  return (
    <CenteredBlock>
      <Flex flexDirection="column" alignItems="center">
        <h2>Main menu</h2>
        <Flex flexDirection="column" alignItems="center">
          <StyledLink to="/level">Play</StyledLink>
          <StyledLink to="/settings">Settings</StyledLink>
        </Flex>
      </Flex>
    </CenteredBlock>
  );
};
