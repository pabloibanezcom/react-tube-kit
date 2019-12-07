import React from 'react';
import { Button, LayoutWrapper } from '../../../../../../../lib';
import logo from '../../../../../../assets/img/logo192.png';
import menuElements from '../side-navbar.elements.json';

const LayoutWrapperBasicPage = () => (
  <>
    <LayoutWrapper headerTitle="React Tube Kit" headerLogo={logo} sideNavbarElements={menuElements}>
      <div
        className="container d-flex align-content-center justify-content-center flex-wrap"
        style={{ flex: '1 1' }}
      >
        <Button icon="long-arrow-left" to="/components/layout/layout-wrappers">
          Go back
        </Button>
      </div>
    </LayoutWrapper>
  </>
);

export default LayoutWrapperBasicPage;
