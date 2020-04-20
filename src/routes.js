import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Cadastro from "./pages/cadastro";
import Header from "./pages/header";
import Home from "./pages/home";

export default function Routes(params) {
  return (
    <BrowserRouter>
      <Switch>
        <div className="container">
          <Header />
          <Route path="/" component={Home} exact />
          <Route path="/cadastro" component={Cadastro} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}
