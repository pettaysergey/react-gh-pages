import { configureStore } from "@reduxjs/toolkit";

import { rootReducer as reducer } from "./reducer";

export const store = configureStore({
  reducer,
  devTools: true,
});
