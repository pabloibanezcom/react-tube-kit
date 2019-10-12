import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import labelPrimary from './examples/label-primary';
import properties from './label.properties.json';

const examples = [labelPrimary];

const Labels = () => (
  <div>
    <h1 className="right-line mb-8">Labels</h1>
    <div className="row justify-content-end">
      <div className="col-lg-9">
        {examples.map(example => (
          <DemoElement
            key={example.id}
            component="Label"
            example={example}
            options={{ fullWidth: true }}
          />
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
