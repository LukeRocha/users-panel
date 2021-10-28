import React, { useState } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import Modal from "./components/Modal";

function App() {
  const [isModal, setIsModal] = useState(false);
  const modalToggle = () => {
    return setIsModal(!isModal);
  };
  return (
    <div className="App">
      <Header>
        <h3>LOGO</h3>
      </Header>
      <Users modalToggle={modalToggle} />
      {isModal && <Modal />}
    </div>
  );
}

export default App;
