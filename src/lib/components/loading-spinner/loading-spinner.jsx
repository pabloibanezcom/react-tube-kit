import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { BarLoader } from 'react-spinners';

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

LoadingSpinner.defaultProps = {
  background: 'light',
  className: '',
  color: 'primary',
  inverse: false,
  loading: false,
  noSpinner: false
};

LoadingSpinner.propTypes = {
  background: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  inverse: PropTypes.bool,
  loading: PropTypes.bool,
  noSpinner: PropTypes.bool
};

export default LoadingSpinner;
