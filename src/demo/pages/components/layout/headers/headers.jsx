import React from 'react';
import logo from '../../../../assets/img/logo192.png';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../../components';
import headerBasic from './examples/header-basic/header-basic';
import headerTitleMobileHidden from './examples/header-title-mobile-hidden/header-title-mobile-hidden';
import headerWithLogo from './examples/header-with-logo/header-with-logo';
import properties from './header.properties.json';

const examples = [headerBasic, headerWithLogo, headerTitleMobileHidden];

const Headers = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-4">Headers</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="Header"
              example={example}
              options={{ width: 'full' }}
              bindings={{ logo }}
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

export default Headers;
