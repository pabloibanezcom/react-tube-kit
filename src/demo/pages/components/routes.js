import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import componentsData from '../../../lib/components/data';
import ComponentPage from '../../components/component-page/component-page';
import menuData from '../../demo-menu.data.json';
import examples from './examples';

const routes = path => (
  <Switch>
    {menuData
      .find(mEl => mEl.url === 'components')
      .children.filter(cEl => cEl.component)
      .map(cEl => (
        <Route
          key={cEl.url}
          path={`${path}/${cEl.url}`}
          component={() => (
            <ComponentPage
              componentData={componentsData[cEl.component]}
              examples={examples[cEl.component]}
            />
          )}
        />
      ))}

    <Redirect to={`${path}/badge`} />
  </Switch>
);

export default routes;
