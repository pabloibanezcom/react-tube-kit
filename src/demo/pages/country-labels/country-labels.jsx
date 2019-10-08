import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../components';
import properties from './country-labels.properties.json';
import basic from './examples/basic';

const examples = [basic];

const CountryLabels = () => (
  <div>
    <h1 className="right-line mb-8">Country labels</h1>
    <div className="row justify-content-end">
      <div className="col-lg-6">
        {examples.map(example => (
          <DemoElement key={example.id} component="CountryLabel" example={example} />
        ))}
        <DemoPropsTable properties={properties} />
      </div>
      <div className="col-lg-4">
        <DemoSectionsMenu examples={examples} apiSections={['Options']} />
      </div>
    </div>
  </div>
);

export default CountryLabels;
