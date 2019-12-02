import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import inputBgColors from './examples/input-bg-colors';
import inputClearable from './examples/input-clearable';
import inputColors from './examples/input-colors';
import inputDefaultValue from './examples/input-default-value';
import inputDisabled from './examples/input-disabled';
import inputPlaceholder from './examples/input-placeholder';
import inputReadOnly from './examples/input-readonly';
import inputTypes from './examples/input-types';
import inputWithIcon from './examples/input-with-icon';
import properties from './input.properties.json';

const examples = [
  inputBgColors,
  inputColors,
  inputPlaceholder,
  inputDefaultValue,
  inputClearable,
  inputDisabled,
  inputReadOnly,
  inputTypes,
  inputWithIcon
];

const Inputs = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Inputs</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement key={example.id} component="Input" example={example} />
          ))}
          <DemoPropsTable properties={properties} />
        </div>
        <div className="col-lg-3 .d-none .d-md-block">
          <DemoSectionsMenu examples={examples} apiSections={['Options', 'Methods']} />
        </div>
      </div>
    </div>
  </div>
);

export default Inputs;
