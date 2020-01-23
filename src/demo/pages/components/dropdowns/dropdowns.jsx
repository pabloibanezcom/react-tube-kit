import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import properties from './dropdown.properties.json';
import dropdownAnchorLink from './examples/dropdown-anchor-link';
import dropdownBasic from './examples/dropdown-basic';

const examples = [dropdownBasic, dropdownAnchorLink];

const Dropdowns = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Dropdowns</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement key={example.id} component="Dropdown" example={example} />
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

export default Dropdowns;
