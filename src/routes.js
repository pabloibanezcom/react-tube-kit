import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Demo from './demo/demo';
import HeaderBasicPage from './demo/pages/components/headers/examples/header-basic/header-basic-page';
import HeaderTitleMobileHiddenPage from './demo/pages/components/headers/examples/header-title-mobile-hidden/header-title-mobile-hidden-page';
import HeaderWithLogoPage from './demo/pages/components/headers/examples/header-with-logo/header-with-logo-page';

const routes = () => (
  <Switch>
    <Route path="/components/headers/basic" exact component={HeaderBasicPage} />
    <Route path="/components/headers/header-logo" exact component={HeaderWithLogoPage} />
    <Route
      path="/components/headers/header-title-mobile-hidden"
      exact
      component={HeaderTitleMobileHiddenPage}
    />
    <Route path="/" component={Demo} />
    <Redirect to="/" />
  </Switch>
);

export default routes;
