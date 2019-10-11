import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import properties from './color-labels.properties.json';
import basic from './examples/basic';

const examples = [basic];

const ColorLabels = () => (
  <div>
    <h1 className="right-line mb-8">Color labels</h1>
    <div className="row justify-content-end">
      <div className="col-lg-9">
        {examples.map(example => (
          <DemoElement key={example.id} component="ColorLabel" example={example} />
        ))}
        <DemoPropsTable properties={properties} />
      </div>
      <div className="col-lg-3">
        <DemoSectionsMenu examples={examples} apiSections={['Options']} />
      </div>
    </div>
  </div>
);

export default ColorLabels;
