import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import basicOptions from './examples/basic-options.json';
import selectorBasic from './examples/selector-basic';
import selectorSearch from './examples/selector-search';
import properties from './selector.properties.json';

const examples = [selectorBasic, selectorSearch];

const Selectors = () => (
  <div>
    <h1 className="right-line mb-8">Selectors</h1>
    <div className="row justify-content-end">
      <div className="col-lg-9">
        {examples.map(example => (
          <DemoElement
            key={example.id}
            component="Selector"
            example={example}
            bindings={{ basicOptions }}
            options={{ width: '200' }}
          />
        ))}
        <DemoPropsTable properties={properties} />
      </div>
      <div className="col-lg-3">
        <DemoSectionsMenu examples={examples} apiSections={['Options', 'Methods']} />
      </div>
    </div>
  </div>
);

export default Selectors;
