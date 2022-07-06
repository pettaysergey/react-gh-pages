import { AnyAction } from "redux";
import { LOGIN, LOGOUT } from "./constants";

const LS_KEY = "duck_game_userName";

export type InitialAuthState = {
  userName: string;
};

export const initialState: InitialAuthState = {
  userName: localStorage.getItem(LS_KEY) || "",
};

export const authReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem(LS_KEY, action.payload);

      return { ...state, userName: action.payload };

    case LOGOUT:
      localStorage.removeItem(LS_KEY);

      return { ...state, userName: "" };

    default:
      return state;
  }
};
