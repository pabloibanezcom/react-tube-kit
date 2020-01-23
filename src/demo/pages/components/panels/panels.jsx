import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import panelHeaderIcon from './examples/panel-header-icon';
import panelPrimary from './examples/panel-primary';
import panelPrimaryHeader from './examples/panel-primary-header';
import panelSecondary from './examples/panel-secondary';
import panelSecondaryHeader from './examples/panel-secondary-header';
import panelWhite from './examples/panel-white';
import properties from './panel.properties.json';

const examples = [
  panelWhite,
  panelPrimary,
  panelSecondary,
  panelPrimaryHeader,
  panelSecondaryHeader,
  panelHeaderIcon
];

const Panels = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Panels</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="Panel"
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

export default Panels;
