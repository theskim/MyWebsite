import React from "react";
import ReactDOM from "react-dom/client";
import "./global.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/store";

export const setSideBar = (given) => {
  return {
    type: "SET_SIDEBAR",
    given: given,
  };
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
