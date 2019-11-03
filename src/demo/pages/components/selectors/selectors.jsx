import React from 'react';
import { CountryLabel } from '../../../../lib';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import SelectorLine from '../../../components/custom-components/selector-line/selector-line';
import countries from './examples/countries.json';
import lines from './examples/lines.json';
import selectorBasic from './examples/selector-basic';
import selectorCustom from './examples/selector-custom';
import selectorManyOptions from './examples/selector-many-options';
import selectorOptionCustomClass from './examples/selector-option-custom-class';
import selectorSearch from './examples/selector-search';
import towns from './examples/towns.json';
import properties from './selector.properties.json';

const examples = [
  selectorBasic,
  selectorSearch,
  selectorCustom,
  selectorOptionCustomClass,
  selectorManyOptions
];

const townsWithCountries = towns.map(t => ({ ...t, code: t.country.code }));

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
            bindings={{ lines, towns, townsWithCountries, countries, SelectorLine, CountryLabel }}
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
