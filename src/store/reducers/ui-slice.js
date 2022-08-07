import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  cardIsVisiable: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggle(state) {
      state.cardIsVisiable = !state.cardIsVisiable;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
