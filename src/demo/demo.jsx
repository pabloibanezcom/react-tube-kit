import { Footer, LayoutWrapper } from 'components';
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import logo from './assets/img/logo192.png';
import menuElements from './demo-menu.data.json';
import routes from './routes';

const Demo = ({ history }) => (
  <Fragment>
    <LayoutWrapper
      headerTitle="React Tube Kit"
      headerLogo={logo}
      className="demo"
      currentPage={history.location.pathname.replace('/demo/', '')}
      sideNavbarElements={menuElements}
    >
      {routes}
    </LayoutWrapper>
    <Footer text="Development & Design by Pablo Ibanez - 2019" />
  </Fragment>
);

export default withRouter(Demo);
