import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice } from "./characters/characters.slice";

export const store = configureStore({
  reducer: charactersSlice,
});
