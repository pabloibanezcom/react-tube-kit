import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../components';
import properties from './badge.properties.json';
import badgeCustom from './examples/badge-custom';
import badgePrimary from './examples/badge-primary';
import badgeSecondary from './examples/badge-secondary';

const examples = [badgePrimary, badgeSecondary, badgeCustom];

const Badges = () => (
  <div>
    <h1 className="right-line mb-8">Badges</h1>
    <div className="row justify-content-end">
      <div className="col-lg-6">
        {examples.map(example => (
          <DemoElement key={example.id} component="Badge" example={example} />
        ))}
        <DemoPropsTable properties={properties} />
      </div>
      <div className="col-lg-4">
        <DemoSectionsMenu examples={examples} apiSections={['Options']} />
      </div>
    </div>
  </div>
);

export default Badges;
