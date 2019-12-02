import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../../components';
import layoutWrapperBasic from './examples/layout-wrapper-basic/layout-wrapper-basic';
import properties from './layout-wrapper.properties.json';

const examples = [layoutWrapperBasic];

const Layouts = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-4">Layout Wrappers</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="LayoutWrapper"
              example={example}
              options={{ width: 'full' }}
              actions={[{ text: 'Show in full page', icon: 'screen-full', to: true }]}
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

export default Layouts;
