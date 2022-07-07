import React from "react";
import styled from "styled-components/macro";

import cursor from "../assets/img/cursor.png";
import { useCursor } from "../hooks/useCursor";

const StyledCursor = styled.div.attrs(
  (props: { pos: { x: number; y: number } }) => ({
    style: {
      top: `${props.pos.y}px`,
      left: `${props.pos.x}px`,
    },
  })
)<{ pos: { x: number; y: number } }>`
  position: fixed;
  transform: translate(-10px, -10px);
`;

export const Cursor = () => {
  const pos = useCursor();

  return (
    <StyledCursor pos={pos}>
      <img src={cursor} alt="Cursor" width="20px" />
    </StyledCursor>
  );
};
