import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import mapBasic from './examples/map-basic';
import properties from './map.properties.json';

const examples = [mapBasic];

const Maps = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Maps</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="Map"
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

export default Maps;
