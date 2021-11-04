import React from "react";
import User from "./User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Form from "./Form";
import Users from "./Users";
import Error from "./Error";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route path="/user">
          <Form />
        </Route>
        <Route path="/user/:id" children={<User />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
