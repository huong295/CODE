import { configureStore } from "@reduxjs/toolkit";
import celciusActiveReducer from "./celciusActive"
import searchActiveReducer from "./searchActive";
const store = configureStore({
  reducer: {
    searchActive: searchActiveReducer,
    celciusActive: searchActiveReducer
  },
});

export default store;
