import { combineReducers, configureStore } from "@reduxjs/toolkit";
import workoutsSlice from "./workoutsSlice";

const reducer = combineReducers({
  workouts: workoutsSlice,
});

export const store = configureStore({ reducer });
