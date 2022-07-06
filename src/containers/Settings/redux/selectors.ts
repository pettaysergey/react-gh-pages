import { State } from "@store/reducer";

export const getSettings = (state: State) => state.settingReducer;
export const getDifficult = (state: State) => getSettings(state).difficult;
