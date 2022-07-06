import { State } from "@store/reducer";

export const getUser = (state: State) => state.authReducer.userName;
