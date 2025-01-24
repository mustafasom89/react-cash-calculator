// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  counter: 0,
};

// Create a counter slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

// Create the Redux store
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const { increment, decrement } = counterSlice.actions;
export default store;
