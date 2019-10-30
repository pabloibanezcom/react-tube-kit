import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Colors from './colors/colors';
import Flex from './flex/flex';
import Spacing from './spacing/spacing';
import Text from './text/text';

const routes = path => (
  <Switch>
    <Route path={`${path}/colors`} component={Colors} />
    <Route path={`${path}/flex`} component={Flex} />
    <Route path={`${path}/spacing`} component={Spacing} />
    <Route path={`${path}/text`} component={Text} />
    <Redirect to={`${path}/flex`} />
  </Switch>
);

export default routes;
