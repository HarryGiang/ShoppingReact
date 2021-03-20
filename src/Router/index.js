// import PrivateRoute from "./Private.Route";
import PublicRoute from "./Public.Route";

import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Home } from "Pages";

import { ROUTER } from "Constants/CommonContants";
import ProductDetail from "Pages/Public/ProductDetail";
import Shop from "Pages/Public/Shop";
import FAQ from "Pages/Public/FAQ";
import Contact from "Pages/Public/Contact";

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute exact path={ROUTER.Home} component={Home} />
      <PublicRoute
        exact
        path={ROUTER.ProductDetail}
        component={ProductDetail}
      />
      <PublicRoute exact path={ROUTER.Shop} component={Shop} />
      <PublicRoute exact path={ROUTER.FAQ} component={FAQ} />
      <PublicRoute exact path={ROUTER.Contact} component={Contact} />
    </Switch>
  </Router>
);

export default Routes;
