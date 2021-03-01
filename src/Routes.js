import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Login from "./views/Login/Login";

const Routes = (props) => {
  return <Switch>
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Login} />

  </Switch >;
};

export default Routes;
