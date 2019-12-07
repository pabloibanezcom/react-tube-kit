import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import iconBasic from './examples/icon-basic';
import iconCustomColor from './examples/icon-custom-color';
import iconSizes from './examples/icon-sizes';
import iconTypes from './examples/icon-types';
import iconsList from './examples/icons-list';
import properties from './icon.properties.json';

const examples = [iconBasic, iconTypes, iconSizes, iconCustomColor, iconsList];

const Icons = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Icons</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement key={example.id} component="Icon" example={example} />
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

export default Icons;
