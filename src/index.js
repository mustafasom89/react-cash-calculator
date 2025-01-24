import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer/reducer";
import Counter from "./components/Counter";

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
