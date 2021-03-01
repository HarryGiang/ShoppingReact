import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {Home} from "Page";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact={true} component={Home} /> 
      </BrowserRouter>
    </>
  );
}

export default App;
