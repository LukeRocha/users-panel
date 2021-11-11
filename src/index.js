import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import AppRouter from "./components/index";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </AppRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
