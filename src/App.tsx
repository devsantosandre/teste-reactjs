import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { RouteLayout } from "./Components";
import WithHeader from "./Components/Layouts/WithHeader";
import Home from "./Pages/Home";
import LoginCallback from "./Pages/LoginCallback";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login/callback/" component={LoginCallback} />
        <Redirect exact from="/" to="/home" />
        <RouteLayout path="/home" exact component={Home} layout={WithHeader} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
