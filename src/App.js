import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "Page";
import { Header } from "Components/Layout/Header";
import { Footer } from "Components/Layout/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
