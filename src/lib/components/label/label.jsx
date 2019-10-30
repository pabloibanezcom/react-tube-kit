import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ children, className, color, forhtml, weight }) => (
  <label className={`label text-${color} font-weight-${weight} ${className}`} forhtml={forhtml}>
    {children}
  </label>
);

Label.defaultProps = {
  className: '',
  color: 'body',
  forhtml: null,
  weight: 'normal'
};

Label.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body',
    'muted',
    'white',
    'black-50',
    'white-50'
  ]),
  forhtml: PropTypes.string,
  weight: PropTypes.oneOf(['bold', 'normal', 'light'])
};

export default Label;
