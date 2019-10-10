import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Introduction from './introduction/introduction';
import Theming from './theming/theming';

const routes = path => (
  <Switch>
    <Route path={`${path}/introduction`} component={Introduction} />
    <Route path={`${path}/theming`} component={Theming} />
    <Redirect to={`${path}/introduction`} />
  </Switch>
);

export default routes;
