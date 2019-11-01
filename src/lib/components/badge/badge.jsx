import PropTypes from 'prop-types';
import React from 'react';
import { getAlternateColor } from '../../util/color';

const Badge = ({ children, block, border, className, color, backgroundColor, weight, type }) => (
  <span
    className={`badge px-2 py-1 ${!backgroundColor ? `bg-${type}` : null} text-${color ||
      getAlternateColor(type)} font-weight-${weight} ${block ? 'd-block' : 'd-inline-flex'} ${
      border ? 'badge-border' : ''
    } ${className} align-items-center`}
    style={{
      backgroundColor,
      color,
      borderColor: border ? color || getAlternateColor(type) : null
    }}
  >
    {children}
  </span>
);

Badge.defaultProps = {
  backgroundColor: null,
  block: false,
  border: false,
  className: '',
  color: null,
  weight: 'normal',
  type: 'primary'
};

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  block: PropTypes.bool,
  border: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.oneOf(['bold', 'normal', 'light']),
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'light', 'dark'])
};

export default Badge;
