import React from 'react';
import JsxParser from 'react-jsx-parser';
import { Button, Header } from '../../../../../../lib';
import logo from '../../../../../assets/img/logo192.png';
import getComponentsForParser from '../../../../../util/getComponentsForParser';
import mockMenuElements from '../menuElements.json';
import html from './bottom-menu-basic.html';

const BottomMenuBasicPage = () => (
  <>
    <Header logo={logo} title="React Tube Kit" />
    <div
      className="container d-flex align-content-center justify-content-center flex-wrap"
      style={{ flex: '1 1' }}
    >
      <Button icon="long-arrow-left" to="/components/headers">
        Go back to bottom menus
      </Button>
    </div>
    <JsxParser
      components={getComponentsForParser('BottomMenu')}
      jsx={`<div>${html}</div>`}
      bindings={{ mockMenuElements }}
    />
  </>
);

export default BottomMenuBasicPage;
