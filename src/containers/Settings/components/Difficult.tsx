import React from "react";
import { Box, Flex } from "reflexbox/styled-components";
import styled from "styled-components";
import { DifficultType } from "../types";

type Props = {
  activeValue: number;
  onChange: (value: DifficultType) => void;
  list: DifficultType[];
};

const StyledTitle = styled(Box)`
  color: #fff;
`;

const StyledButton = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  color: ${({ isActive }) => (isActive ? "#000" : "#fff")};
  padding: 4px;
  margin-right: 8px;
`;

export const Difficult = ({ list, activeValue, onChange }: Props) => {
  return (
    <Flex alignItems="center">
      <StyledTitle mr="10px">Difficult:</StyledTitle>
      {list.map((item) => (
        <StyledButton
          key={item.value}
          isActive={activeValue === item.value}
          onClick={() => onChange(item)}
        >
          {item.name}
        </StyledButton>
      ))}
    </Flex>
  );
};
