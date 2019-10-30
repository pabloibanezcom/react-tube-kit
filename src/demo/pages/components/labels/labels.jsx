import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import labelColors from './examples/label-colors';
import labelWeights from './examples/label-weights';
import properties from './label.properties.json';

const examples = [labelColors, labelWeights];

const Labels = () => (
  <div>
    <h1 className="right-line mb-8">Labels</h1>
    <div className="row justify-content-end">
      <div className="col-lg-9">
        {examples.map(example => (
          <DemoElement key={example.id} component="Label" example={example} />
        ))}
        <DemoPropsTable properties={properties} />
      </div>
      <div className="col-lg-3">
        <DemoSectionsMenu examples={examples} apiSections={['Options']} />
      </div>
    </div>
  </div>
);

export default Labels;
