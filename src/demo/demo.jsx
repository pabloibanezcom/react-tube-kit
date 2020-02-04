import { Button, Footer, LayoutWrapper } from 'components';
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import logo from './assets/img/logo192.png';
import components from './components.json';
import menuElements from './demo-menu.data.json';
import releases from './releases.json';
import routes from './routes';

menuElements.find(mEl => mEl.url === 'components').children = components;

const Demo = ({ history }) => {
  const rightContent = () => {
    return (
      <div>
        <Button type="link" to="/releases" color="secondary-alt" className="mr-4">
          v.{releases[0].version}
        </Button>
        <Button
          type="link"
          color="secondary-alt"
          href="https://github.com/pabloibanezcom/react-tube-kit"
          newPage
        >
          GitHub
        </Button>
      </div>
    );
  };

  return (
    <Fragment>
      <LayoutWrapper
        currentPage={history.location.pathname.replace('/demo/', '')}
        className="demo"
        topNavbarOptions={{
          title: 'React Tube Kit',
          logo,
          rightContent: rightContent()
        }}
        sideNavbarOptions={{ elements: menuElements }}
      >
        <div className="container layout-container pt-7 pb-7">{routes}</div>
      </LayoutWrapper>
      <Footer text="Development & Design by Pablo Ibanez - 2020" />
    </Fragment>
  );
};

export default withRouter(Demo);
