import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./pages/index";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter>{/* <App /> */}</AppRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
