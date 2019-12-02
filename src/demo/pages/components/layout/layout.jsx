import React, { Fragment } from 'react';
import routes from './routes';

const Layout = ({ match }) => <Fragment>{routes(match.path)}</Fragment>;

export default Layout;
