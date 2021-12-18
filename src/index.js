import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./pages/index";
import { AppProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <AppRouter></AppRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
