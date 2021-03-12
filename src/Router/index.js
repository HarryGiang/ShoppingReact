// import PrivateRoute from "./Private.Route";
import PublicRoute from "./Public.Route";

import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Home } from "Pages";

import { ROUTER } from "Constants/CommonContants";

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute exact path={ROUTER.Home} component={Home} />
    </Switch>
  </Router>
);

export default Routes;
