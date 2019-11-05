import React from 'react';
import JsxParser from 'react-jsx-parser';
import { Button } from '../../../../../../lib';
import logo from '../../../../../assets/img/logo192.png';
import getComponentsForParser from '../../../../../util/getComponentsForParser';
import html from './header-with-logo.html';

const HeaderWithLogoPage = () => (
  <>
    <JsxParser
      bindings={{ logo }}
      components={getComponentsForParser('Header')}
      jsx={`<div>${html}</div>`}
    />
    <div
      className="container d-flex align-content-center justify-content-center flex-wrap"
      style={{ flex: '1 1' }}
    >
      <Button icon="long-arrow-left" to="/components/headers">
        Go back to headers
      </Button>
    </div>
  </>
);

export default HeaderWithLogoPage;
