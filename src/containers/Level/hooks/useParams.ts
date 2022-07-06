import { getDifficult } from "@containers/Settings";
import { useSelector } from "react-redux";

type LevelParams = {
  duckSpeed: number;
  ammo: number;
};

export const useParams = (): LevelParams => {
  const { value } = useSelector(getDifficult);
  const duckSpeed = 5000 / value;

  return {
    duckSpeed,
    ammo: 10,
  };
};
