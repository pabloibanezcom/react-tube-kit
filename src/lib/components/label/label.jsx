import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ children, color, fontColor, forHtml, className }) => {
  return (
    <label
      className={`label label-${color} ${className}`}
      style={fontColor ? { color: fontColor } : null}
      forHtml={forHtml}
    >
      {children}
    </label>
  );
};

Label.defaultProps = {
  className: '',
  color: 'black',
  fontColor: null,
  forHtml: null
};

Label.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['white', 'black', 'primary', 'secondary']),
  fontColor: PropTypes.string,
  forHtml: PropTypes.string
};

export default Label;
