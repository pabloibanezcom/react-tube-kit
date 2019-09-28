import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Demo from './demo/demo';

const routes = () => (
  <Switch>
    <Route path="/demo" component={Demo} />
    <Redirect to="/demo" />
  </Switch>
);

export default routes;
