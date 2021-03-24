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
import Cart from "Components/Cart";
import Checkout from "Pages/Public/Checkout";
import Register from "Pages/Public/Register";
import Login from "Pages/Public/Login";

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
      <PublicRoute exact path={ROUTER.Checkout} component={Checkout} />
      <PublicRoute exact path={ROUTER.Register} component={Register} />
      <PublicRoute exact path={ROUTER.Login} component={Login} />
    </Switch>
  </Router>
);

export default Routes;
