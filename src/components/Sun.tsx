import React from "react";

import styled from "styled-components";
import { useParalax } from "hooks/useParalax";

import sun from "../assets/img/sun.png";

const StyledSun = styled.div.attrs(
  (props: { pos: { x: number; y: number } }) => ({
    style: {
      transform: `translateX(${props.pos.x}px) translateY(${props.pos.y}px)`,
    },
  })
)<{ pos: { x: number; y: number } }>`
  position: fixed;
  z-index: -1;
  top: 30px;
  left: 30px;
  width: 150px;
  transition: 0.1s;

  img {
    width: 100%;
  }
`;

export const Sun = () => {
  const pos = useParalax({ xInvert: true, yInvert: true });

  return (
    <StyledSun pos={pos}>
      <img src={sun} alt="Sun" />
    </StyledSun>
  );
};
