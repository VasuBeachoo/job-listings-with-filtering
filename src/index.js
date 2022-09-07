import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import jobFilterSlice from "./jobFilterSlice";
import App from "./App";

const store = configureStore({
  reducer: { jobFilter: jobFilterSlice.reducer },
});

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
