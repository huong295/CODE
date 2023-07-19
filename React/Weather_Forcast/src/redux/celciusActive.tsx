import { createSlice } from "@reduxjs/toolkit";
const initialCelciusActiveState = {
    isCelciusActive: true,
  };


  const celciusActiveSlice = createSlice({
    name: "celciusActive",
    initialState: initialCelciusActiveState,
    reducers: {
      toggleSearchActive(state) {
        state.isCelciusActive = !state.isCelciusActive;
      },
    },
  });
  export const celciusActiveActions = celciusActiveSlice.actions;

  export default celciusActiveSlice.reducer;
  