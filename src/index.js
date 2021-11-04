import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import AppRouter from "./components/index";
import { AppContext } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider>
      <AppRouter>
        <App />
      </AppRouter>
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
