import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  characters: null,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentCharacters: (state, { payload }) => {
      return {
        ...state,
        characters: payload,
      };
    },
    sortByMass: (state) => {
      state.characters.sort((a, b) =>
        a.mass === "unknown" ? -1 : b.mass === "unknown" ? 1 : a.mass - b.mass
      );
    },
  },
});

export const { setCurrentCharacters, sortByMass } = charactersSlice.actions;
