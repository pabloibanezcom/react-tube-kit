/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React from 'react';
import { getAlternateColor } from '../../util/color';

const Badge = ({
  children,
  block,
  border,
  className,
  color,
  outline,
  size,
  backgroundColor,
  weight,
  type
}) => (
  <span
    className={`badge badge--${size}  ${
      !backgroundColor ? (outline ? `border border-${type} text-${type}` : `bg-${type}`) : null
    } text-${color || getAlternateColor(type, outline)} font-weight-${weight} ${
      block ? 'd-block' : 'd-inline-flex'
    } ${border ? 'badge--with-border' : ''} ${
      outline ? 'badge--outline' : ''
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
  outline: false,
  size: 'md',
  weight: 'normal',
  type: 'primary'
};

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  block: PropTypes.bool,
  border: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  weight: PropTypes.oneOf(['bold', 'normal', 'light']),
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'light', 'dark'])
};

export default Badge;
