import React from "react";
import User from "../components/User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Form from "./Form";
import Users from "../components/Users";
import Error from "../pages/Error";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route path="/register">
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
