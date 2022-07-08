import { getDifficult } from "@containers/Settings";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type Position = {
  x: number;
  y: number;
  leftDirection: boolean;
};

const h = window.innerHeight - 50;
const w = window.innerWidth - 50;

const getStartPosition = () => ({
  x: Math.floor(Math.random() * w),
  y: Math.floor(Math.random() * h),
  leftDirection: false,
});

const getNewPosition = () => {
  const ny = Math.floor(Math.random() * h);
  const nx = Math.floor(Math.random() * w);

  return { ny, nx };
};

export const usePosition = (): Position => {
  const { value } = useSelector(getDifficult);
  const speed = 5000 / value;
  const [position, setPosition] = useState(getStartPosition());

  const handleStartInterval = () =>
    setInterval(() => {
      const { ny, nx } = getNewPosition();

      setPosition((val) => {
        console.log(val.x);

        return { x: nx, y: ny, leftDirection: nx < val.x };
      });
    }, speed);

  const handleFirstPosition = () => {
    const { ny, nx } = getNewPosition();
    setPosition({ x: nx, y: ny, leftDirection: nx < position.x });
    handleStartInterval();
  };

  useEffect(() => {
    handleFirstPosition();
  }, []);

  return position;
};
