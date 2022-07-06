import { createAction } from "@reduxjs/toolkit";
import { DifficultType } from "../types";
import { SET_DIFFICULT } from "./constants";

export const setDiffucult = createAction(
  SET_DIFFICULT,
  (value: DifficultType) => ({
    payload: value,
  })
);
