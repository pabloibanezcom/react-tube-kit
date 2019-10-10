import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Demo from './demo/demo';

const routes = () => (
  <Switch>
    <Route path="/" component={Demo} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
