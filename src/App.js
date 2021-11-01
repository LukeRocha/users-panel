import React, { useState } from "react";
import Header from "./components/Header";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Header>
        <h3>PANEL</h3>
      </Header>
      <Users />
    </div>
  );
}

export default App;
