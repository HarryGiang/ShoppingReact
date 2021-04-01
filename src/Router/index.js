// import PrivateRoute from "./Private.Route";
import { ROUTER } from "Constants/CommonContants";
import { Home } from "Pages";
import Checkout from "Pages/Public/Checkout";
import Contact from "Pages/Public/Contact";
import FAQ from "Pages/Public/FAQ";
import Login from "Pages/Public/Login";
import Payment from "Pages/Public/Payment";
import ProductDetail from "Pages/Public/ProductDetail";
import Register from "Pages/Public/Register";
import Shop from "Pages/Public/Shop";
import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./Public.Route";


const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute exact path={ROUTER.Home} component={Home} />
      <PublicRoute
        
        path={`${ROUTER.ProductDetail}/:id`}
        component={ProductDetail}
      />
      <PublicRoute exact path={ROUTER.Shop} component={Shop} />
      <PublicRoute exact path={ROUTER.FAQ} component={FAQ} />
      <PublicRoute exact path={ROUTER.Contact} component={Contact} />
      <PublicRoute exact path={ROUTER.Checkout} component={Checkout} />
      <PublicRoute exact path={ROUTER.Register} component={Register} />
      <PublicRoute exact path={ROUTER.Login} component={Login} />
      <PublicRoute exact path={ROUTER.Payment} component={Payment} />
    </Switch>
  </Router>
);

export default Routes;
