import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import properties from './button.properties.json';
import buttonInverse from './examples/button-inverse';
import buttonLight from './examples/button-light';
import buttonLink from './examples/button-link';
import buttonNoBlock from './examples/button-no-block';
import buttonNoTextTransformation from './examples/button-no-text-transformation';
import buttonOutline from './examples/button-outline';
import buttonPrimary from './examples/button-primary';
import buttonSecondary from './examples/button-secondary';
import buttonSizes from './examples/button-sizes';
import buttonTransparent from './examples/button-transparent';
import buttonWithIcon from './examples/button-with-icon';

const examples = [
  buttonPrimary,
  buttonSecondary,
  buttonLight,
  buttonTransparent,
  buttonOutline,
  buttonInverse,
  buttonSizes,
  buttonNoTextTransformation,
  buttonNoBlock,
  buttonWithIcon,
  buttonLink
];

const Buttons = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Buttons</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="Button"
              example={example}
              options={{ flexColumn: true }}
            />
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

export default Buttons;
