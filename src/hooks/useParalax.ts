import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

const w = window.innerWidth / 2;
const h = window.innerHeight / 2;

type DirectionProp = {
  xInvert?: boolean;
  yInvert?: boolean;
};

export const useParalax = ({
  xInvert = false,
  yInvert = false,
}: DirectionProp) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const listener = useCallback(
    debounce((e: MouseEvent) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      setPos({
        x: xInvert ? -(mouseX - w) * 0.01 : (mouseX - w) * 0.01,
        y: yInvert ? -(mouseY - h) * 0.01 : (mouseY - h) * 0.01,
      });
    }, 3),
    []
  );

  useEffect(() => {
    window.addEventListener("mousemove", listener);

    return () => {
      window.removeEventListener("mousemove", listener);
    };
  }, [listener]);

  return pos;
};
