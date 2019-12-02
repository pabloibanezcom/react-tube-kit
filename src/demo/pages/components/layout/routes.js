import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BottomMenus from './bottom-menus/bottom-menus';
import Headers from './headers/headers';
import LayoutWrappers from './layout-wrappers/layout-wrappers';
import SideNavbars from './side-navbars/side-navbars';

const routes = path => (
  <Switch>
    <Route path={`${path}/layout-wrappers`} component={LayoutWrappers} />
    <Route path={`${path}/bottom-menus`} component={BottomMenus} />
    <Route path={`${path}/headers`} component={Headers} />
    <Route path={`${path}/side-navbars`} component={SideNavbars} />
  </Switch>
);

export default routes;
