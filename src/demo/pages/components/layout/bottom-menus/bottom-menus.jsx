import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../../components';
import properties from './bottom-menu.properties.json';
import bottomMenuBasic from './examples/bottom-menu-basic/bottom-menu-basic';
import bottomMenuScrollHide from './examples/bottom-menu-scroll-hide/bottom-menu-scroll-hide';
import mockMenuElements from './examples/menuElements.json';

const examples = [bottomMenuBasic, bottomMenuScrollHide];

const BottomMenus = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-4">Bottom menus</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="BottomMenu"
              example={example}
              options={{ width: 'full' }}
              bindings={{ mockMenuElements }}
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

export default BottomMenus;
