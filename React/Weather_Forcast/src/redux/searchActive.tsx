import { createSlice } from "@reduxjs/toolkit";

const initialSearchActiveState = {
  isSearchActive: true,
};

const searchActiveSlice = createSlice({
  name: "searchActive",
  initialState: initialSearchActiveState,
  reducers: {
    toggleSearchActive(state) {
      state.isSearchActive = !state.isSearchActive;
    },
  },
});
export const searchActiveActions = searchActiveSlice.actions;

export default searchActiveSlice.reducer;
