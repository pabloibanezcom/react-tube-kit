import React, { Fragment } from 'react';
import { BarLoader } from 'react-spinners';
import generateComponentProps from '../../util/generateComponentProps';
import componentData from './loading-spinner.data.json';

const LoadingSpinner = props => {
  const { background, className, color, inverse, loading, noSpinner } = props;
  return (
    <Fragment>
      {loading ? (
        <div className={`loading-spinner ${className}`}>
          <div className={`ls-background ls-background-${background}`} />
          {!noSpinner && (
            <div
              className={`ls-spinner ls-spinner-${color} ${inverse ? 'ls-spinner-inverse' : ''}`}
            >
              <BarLoader loading={loading} />
            </div>
          )}
        </div>
      ) : null}
    </Fragment>
  );
};

Object.assign(LoadingSpinner, generateComponentProps(componentData));

export default LoadingSpinner;
