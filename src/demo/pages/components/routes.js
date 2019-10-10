import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Badges from './badges/badges';
import Buttons from './buttons/buttons';
import CollapsibleLists from './collapsible-lists/collapsible-lists';
import CountryLabels from './country-labels/country-labels';
import Forms from './forms/forms';
import Headers from './headers/headers';
import Icons from './icons/icons';
import Inputs from './inputs/inputs';
import LoadingSpinners from './loading-spinners/loading-spinners';
import Modals from './modals/modals';
import Paginations from './paginations/paginations';
import Panels from './panels/panels';
import Selectors from './selectors/selectors';
import TabMenus from './tab-menus/tab-menus';

const routes = path => (
  <Switch>
    <Route path={`${path}/badges`} component={Badges} />
    <Route path={`${path}/buttons`} component={Buttons} />
    <Route path={`${path}/collapsible-lists`} component={CollapsibleLists} />
    <Route path={`${path}/country-labels`} component={CountryLabels} />
    <Route path={`${path}/forms`} component={Forms} />
    <Route path={`${path}/headers`} component={Headers} />
    <Route path={`${path}/icons`} component={Icons} />
    <Route path={`${path}/inputs`} component={Inputs} />
    <Route path={`${path}/loading-spinners`} component={LoadingSpinners} />
    <Route path={`${path}/modals`} component={Modals} />
    <Route path={`${path}/paginations`} component={Paginations} />
    <Route path={`${path}/panels`} component={Panels} />
    <Route path={`${path}/selectors`} component={Selectors} />
    <Route path={`${path}/tab-menus`} component={TabMenus} />
    <Redirect to={`${path}/badges`} />
  </Switch>
);

export default routes;