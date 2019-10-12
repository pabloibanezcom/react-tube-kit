import PropTypes from 'prop-types';
import React from 'react';
import { getContrastColor } from '../../util/color';

const Badge = props => {
  const { children, block, border, color, backgroundColor, fontColor, extraClass } = props;
  const style =
    backgroundColor || fontColor
      ? { backgroundColor, color: fontColor || getContrastColor(backgroundColor) }
      : null;
  if (border && fontColor) {
    style.borderColor = fontColor;
  }
  return (
    <span
      className={`badge badge-${color} ${block ? 'badge-block' : ''} ${
        border ? 'badge-border' : ''
      } ${extraClass} d-inline-flex align-items-center`}
      style={style}
    >
      {children}
    </span>
  );
};

Badge.defaultProps = {
  block: false,
  border: false,
  color: 'primary',
  backgroundColor: null,
  fontColor: null,
  extraClass: ''
};

Badge.propTypes = {
  block: PropTypes.bool,
  border: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary']),
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  extraClass: PropTypes.string
};

export default Badge;
