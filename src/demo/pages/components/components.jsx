import React, { Fragment } from 'react';
import routes from './routes';

const Components = ({ match }) => <Fragment>{routes(match.path)}</Fragment>;

export default Components;
