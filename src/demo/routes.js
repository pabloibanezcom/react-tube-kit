import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Components from './pages/components/components';
import GettingStarted from './pages/getting-started/getting-started';
import Layout from './pages/layout/layout';
import Releases from './pages/releases/releases';
import Utilities from './pages/utilities/utilities';

const routes = (
  <Switch>
    <Route path="/components" component={Components} />
    <Route path="/getting-started" component={GettingStarted} />
    <Route path="/layout" component={Layout} />
    <Route path="/utilities" component={Utilities} />
    <Route path="/releases" component={Releases} />
    <Redirect to="/getting-started" />
  </Switch>
);

export default routes;
