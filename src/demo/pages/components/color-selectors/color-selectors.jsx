/* eslint-disable no-alert */
import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import properties from './color-selectors.properties.json';
import basic from './examples/basic';
import initialColor from './examples/initial-color';

const examples = [basic, initialColor];

const ColorSelectors = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Color selectors</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement key={example.id} component="ColorSelector" example={example} />
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

export default ColorSelectors;
