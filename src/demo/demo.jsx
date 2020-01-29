import { Footer, LayoutWrapper } from 'components';
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import logo from './assets/img/logo192.png';
import menuElements from './demo-menu.data.json';
import routes from './routes';

const Demo = ({ history }) => (
  <Fragment>
    <LayoutWrapper
      currentPage={history.location.pathname.replace('/demo/', '')}
      className="demo"
      topNavbarOptions={{ title: 'React Tube Kit', logo }}
      sideNavbarOptions={{ elements: menuElements }}
    >
      <div className="container layout-container pt-7 pb-7">{routes}</div>
    </LayoutWrapper>
    <Footer text="Development & Design by Pablo Ibanez - 2020" />
  </Fragment>
);

export default withRouter(Demo);
