import PropTypes from 'prop-types';
import React from 'react';

const ColorLabel = ({ className, color }) => (
  <div className={`d-flex align-items-center color-label ${className}`}>
    <div className="color-label__color-box">
      <div style={{ backgroundColor: color }} />
    </div>
    {color}
  </div>
);
ColorLabel.defaultProps = {
  className: ''
};

ColorLabel.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired
};

export default ColorLabel;
