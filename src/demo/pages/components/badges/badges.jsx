import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import properties from './badge.properties.json';
import badgeBlock from './examples/badge-block';
import badgeBorder from './examples/badge-border';
import badgeCustom from './examples/badge-custom';
import badgeTypes from './examples/badge-types';

const examples = [badgeTypes, badgeCustom, badgeBorder, badgeBlock];

const Badges = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Badges</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="Badge"
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

export default Badges;
