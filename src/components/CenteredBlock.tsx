import React from "react";
import { Box } from "reflexbox";
import styled from "styled-components/macro";

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  children: React.ReactNode;
};

export const CenteredBlock = ({ children }: Props) => (
  <StyledContainer>
    <Box height="300px">{children}</Box>
  </StyledContainer>
);
