import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import AppRouter from "./components/index";
ReactDOM.render(
  <React.StrictMode>
    <AppRouter>
      <App />
    </AppRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
