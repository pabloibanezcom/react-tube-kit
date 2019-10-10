import React, { Fragment } from 'react';
import routes from './routes';

const GettingStarted = ({ match }) => <Fragment>{routes(match.path)}</Fragment>;

export default GettingStarted;
