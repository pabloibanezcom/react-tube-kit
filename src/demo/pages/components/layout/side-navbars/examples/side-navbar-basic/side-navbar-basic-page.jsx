import React from 'react';
import JsxParser from 'react-jsx-parser';
import { Button, Header } from '../../../../../../lib';
import logo from '../../../../../assets/img/logo192.png';
import getComponentsForParser from '../../../../../util/getComponentsForParser';
import mockMenuElements from '../menuElements.json';
import html from './side-navbar-basic.html';

const SideNavbarBasicPage = () => (
  <>
    <Header logo={logo} title="React Tube Kit" />
    <div
      className="container d-flex align-content-center justify-content-center flex-wrap"
      style={{ flex: '1 1' }}
    >
      <Button icon="long-arrow-left" to="/components/side-navbars">
        Go back to side navbars
      </Button>
    </div>
    <JsxParser
      components={getComponentsForParser('SideNavbar')}
      jsx={`<div>${html}</div>`}
      bindings={{ mockMenuElements }}
    />
  </>
);

export default SideNavbarBasicPage;
