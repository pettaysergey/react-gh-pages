import { AnyAction } from "redux";

import { DIFFICULTS } from "../constants";
import { DifficultType } from "../types";
import { SET_DIFFICULT } from "./constants";

export type InitialSettingsState = {
  difficult: DifficultType;
};

export const initialSettingsState: InitialSettingsState = {
  difficult: DIFFICULTS[0],
};

export const settingReducer = (
  state = initialSettingsState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_DIFFICULT:
      return { ...state, difficult: action.payload };

    default:
      return state;
  }
};
