import { createAction } from "@reduxjs/toolkit";
import { LOGIN, LOGOUT } from "./constants";

export const logIn = createAction(LOGIN, (userName: string) => ({
  payload: userName,
}));

export const logOut = createAction(LOGOUT);
