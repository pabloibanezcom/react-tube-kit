import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  Badges,
  Buttons,
  CollapsibleLists,
  CountryLabels,
  Forms,
  Headers,
  Icons,
  Inputs,
  LoadingSpinners,
  Modals,
  Paginations,
  Panels,
  Selectors,
  TabMenus,
  VisualIndex
} from './pages';

const baseUrl = '/demo';

const routes = (
  <Switch>
    <Route path={`${baseUrl}/badges`} component={Badges} />
    <Route path={`${baseUrl}/buttons`} component={Buttons} />
    <Route path={`${baseUrl}/collapsible-lists`} component={CollapsibleLists} />
    <Route path={`${baseUrl}/country-labels`} component={CountryLabels} />
    <Route path={`${baseUrl}/forms`} component={Forms} />
    <Route path={`${baseUrl}/headers`} component={Headers} />
    <Route path={`${baseUrl}/icons`} component={Icons} />
    <Route path={`${baseUrl}/inputs`} component={Inputs} />
    <Route path={`${baseUrl}/loading-spinners`} component={LoadingSpinners} />
    <Route path={`${baseUrl}/modals`} component={Modals} />
    <Route path={`${baseUrl}/paginations`} component={Paginations} />
    <Route path={`${baseUrl}/panels`} component={Panels} />
    <Route path={`${baseUrl}/selectors`} component={Selectors} />
    <Route path={`${baseUrl}/tab-menus`} component={TabMenus} />
    <Route path={`${baseUrl}`} component={VisualIndex} />
    <Redirect to={`${baseUrl}`} />
  </Switch>
);

export default routes;
