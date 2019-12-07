import PropTypes from 'prop-types';
import React from 'react';

const Icon = ({ color, className, name, size, type }) => (
  <i
    className={`icon icon-${name} icon-${size} ${
      !color && type ? `text-${type}` : null
    } ${className}`}
    style={{ color }}
  />
);

Icon.defaultProps = {
  className: '',
  color: null,
  size: 'md',
  type: null
};

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark',
    'white'
  ])
};

export default Icon;
