import { createSlice } from "@reduxjs/toolkit";
import exercises from "./data.json"

const workoutsSlice = createSlice({
  name: "workouts",
  initialState: exercises,
  reducers: {},
});

export default workoutsSlice.reducer;
