import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../../components';
import mockMenuElements from './examples/menuElements.json';
import sideNavbarBasic from './examples/side-navbar-basic/side-navbar-basic';
import properties from './side-navbar.properties.json';

const examples = [sideNavbarBasic];

const BottomMenus = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-4">Side navbars</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="SideNavbar"
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
