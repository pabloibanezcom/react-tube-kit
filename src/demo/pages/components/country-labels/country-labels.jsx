import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import properties from './country-labels.properties.json';
import basic from './examples/basic';
import countriesList from './examples/countries-list';
import withBadge from './examples/with-badge';
import withBadgeSecondary from './examples/with-badge-secondary';

const examples = [basic, withBadge, withBadgeSecondary, countriesList];

const CountryLabels = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Country labels</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="CountryLabel"
              example={example}
              options={{ width: 'full' }}
            />
          ))}
          <DemoPropsTable properties={properties} />
        </div>
        <div className="col-lg-3 .d-none .d-md-block">
          <DemoSectionsMenu examples={examples} apiSections={['Options']} />
        </div>
      </div>
    </div>
  </div>
);

export default CountryLabels;
