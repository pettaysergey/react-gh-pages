import { AnyAction, combineReducers, Reducer } from "redux";

import { authReducer, InitialAuthState } from "@containers/Auth";
import { settingReducer, InitialSettingsState } from "@containers/Settings";

export type State = {
  authReducer: InitialAuthState;
  settingReducer: InitialSettingsState;
};

export const rootReducer: Reducer<State, AnyAction> = combineReducers({
  authReducer,
  settingReducer,
});
