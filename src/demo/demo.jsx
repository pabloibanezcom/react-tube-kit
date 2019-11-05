import { Footer, Header } from 'components';
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import logo from './assets/img/logo192.png';
import { DemoMenu } from './components';
import routes from './routes';

const Demo = ({ history }) => (
  <Fragment>
    <Header title="React Tube Kit" logo={logo} />
    <div className="base-container demo">
      <DemoMenu currentPage={history.location.pathname.replace('/demo/', '')} />
      <div className="demo-content">{routes}</div>
    </div>
    <Footer text="Development & Design by Pablo Ibanez - 2019" />
  </Fragment>
);

export default withRouter(Demo);
