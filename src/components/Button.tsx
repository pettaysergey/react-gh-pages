import React from "react";
import styled from "styled-components/macro";

type Props = {
  children: string | React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const StyledButton = styled.button<{ disabledAtr: boolean }>`
  border: 2px solid #6fde67;
  background-color: #000;
  padding: 8px;
  color: #fff;
  cursor: ${({ disabledAtr }) => (disabledAtr ? "not-allowed" : "pointer")};
`;

export const Button = ({ children, disabled = false, onClick }: Props) => (
  <StyledButton onClick={onClick} disabled={disabled} disabledAtr={disabled}>
    {children}
  </StyledButton>
);
