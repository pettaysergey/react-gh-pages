import React from "react";
import styled from "styled-components/macro";

type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const StyledInput = styled.input`
  border: 2px solid #6fde67;
  background-color: #000;
  padding: 8px;
  color: #fff;
  font-family: "8bit";
`;

export const Input = ({ value, placeholder, onChange }: Props) => (
  <StyledInput
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
  />
);
