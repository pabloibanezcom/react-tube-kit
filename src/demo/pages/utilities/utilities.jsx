import React, { Fragment } from 'react';
import routes from './routes';

const Utilities = ({ match }) => <Fragment>{routes(match.path)}</Fragment>;

export default Utilities;
