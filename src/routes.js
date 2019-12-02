import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Demo from './demo/demo';
import LayoutWrapperBasicPage from './demo/pages/components/layout/layout-wrappers/examples/layout-wrapper-basic/layout-wrapper-basic-page';

const routes = () => (
  <Switch>
    <Route
      path="/components/layout/layout-wrapper/basic"
      exact
      component={LayoutWrapperBasicPage}
    />
    <Route path="/" component={Demo} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
