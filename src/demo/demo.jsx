import { Footer, Header } from 'components';
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { DemoMenu } from './components';
import routes from './routes';

const Demo = ({ history }) => (
  <Fragment>
    <Header optionsName="admin" />
    <div className="base-container demo">
      <DemoMenu currentPage={history.location.pathname.replace('/demo/', '')} />
      <div className="demo-content">{routes}</div>
    </div>
    <Footer />
  </Fragment>
);

export default withRouter(Demo);
