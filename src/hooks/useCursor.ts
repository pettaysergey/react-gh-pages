import { useEffect, useState } from "react";

export const useCursor = (): { x: number; y: number } => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const listener = (e: MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", listener);
    window.document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", listener);
      window.document.body.style.cursor = "auto";
    };
  }, []);

  return cursorPos;
};
