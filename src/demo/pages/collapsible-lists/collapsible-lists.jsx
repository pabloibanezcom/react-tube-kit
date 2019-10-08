import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../components';
import properties from './collapsible-lists.properties.json';
import lines from './data/lines.json';
import collapsePlain from './examples/collapse-plain';
import collapsePrimary from './examples/collapse-primary';
import collapseSecondary from './examples/collapse-secondary';

const examples = [collapsePlain, collapsePrimary, collapseSecondary];

const fakeHeader = ({ element }) => {
  return (
    <div>
      <span>{element.name}</span>
    </div>
  );
};

const fakeContent = () => {
  return <div>This is fake content</div>;
};

const bindings = {
  lines: lines.slice(0, 9),
  linesA: lines.slice(0, 4),
  linesB: lines.slice(4, 9),
  linesC: lines.slice(9, 14),
  fakeHeader,
  fakeContent
};

const CollapsibleLists = () => (
  <div>
    <h1 className="right-line mb-8">Collapsible lists</h1>
    <div className="row justify-content-end">
      <div className="col-lg-6">
        {examples.map(example => (
          <DemoElement
            key={example.id}
            component="CollapsibleList"
            example={example}
            bindings={bindings}
            options={{ fullWidth: true }}
          />
        ))}
        <DemoPropsTable properties={properties} />
      </div>
      <div className="col-lg-4">
        <DemoSectionsMenu examples={examples} apiSections={['Options']} />
      </div>
    </div>
  </div>
);

export default CollapsibleLists;
