import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  cardIsVisiable: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggle(state) {
      state.cardIsVisiable = !state.cardIsVisiable;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
