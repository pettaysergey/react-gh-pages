import React from "react";

import styled from "styled-components";
import { useParalax } from "hooks/useParalax";

import backImage from "../assets/img/stage.png";
import { Sun } from "./Sun";

const StyledGround = styled.div.attrs(
  (props: { pos: { x: number; y: number } }) => ({
    style: {
      transform: `translateX(${props.pos.x}px) translateY(${props.pos.y}px)`,
    },
  })
)<{ pos: { x: number; y: number } }>`
  position: fixed;
  z-index: -2;
  top: -5%;
  left: -5%;
  height: 110%;
  width: 110%;
  background-image: ${() => `url(${backImage})`};
  background-position: center center;
  background-size: cover;

  transition: 0.1s;
`;

export const Background = () => {
  const pos = useParalax({});

  return (
    <>
      <Sun />
      <StyledGround pos={pos}></StyledGround>
    </>
  );
};
