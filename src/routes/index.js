import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TournamnetPage from "../pages/TournamnetPage";

const RootRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/tournament/:id" component={TournamnetPage} />
  </Switch>
);

export default RootRouter;
