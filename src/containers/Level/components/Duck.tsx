import React, { useRef } from "react";
import styled from "styled-components/macro";
import { usePosition } from "../hooks/usePosition";

import duck from "../duck_gif.gif";
import duck_left from "../duck_gif_left.gif";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

type Props = {
  duckSpeed: number;
  handleShoot: () => void;
  handleClick: () => void;
};

const StyledImg = styled.img<{ posX: number; posY: number; speed: number }>`
  position: fixed;
  top: ${({ posY }) => `${posY}px`};
  left: ${({ posX }) => `${posX}px`};
  transition: ${({ speed }) => `${speed / 1000}s`};
`;

export const Duck = ({ duckSpeed, handleClick, handleShoot }: Props) => {
  const { x, y, leftDirection } = usePosition();
  const ref = useRef(null);

  useOnClickOutside(ref, handleShoot);

  return (
    <StyledImg
      ref={ref}
      src={leftDirection ? duck_left : duck}
      width="60"
      alt=""
      posX={x}
      posY={y}
      speed={duckSpeed}
      onClick={handleClick}
    />
  );
};
