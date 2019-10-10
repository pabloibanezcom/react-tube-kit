import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Flex from './flex/flex';
import Spacing from './spacing/spacing';

const routes = path => (
  <Switch>
    <Route path={`${path}/flex`} component={Flex} />
    <Route path={`${path}/spacing`} component={Spacing} />
    <Redirect to={`${path}/flex`} />
  </Switch>
);

export default routes;
