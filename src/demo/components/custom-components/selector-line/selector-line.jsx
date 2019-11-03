import PropTypes from 'prop-types';
import React from 'react';

const SelectorLine = ({ className, line: { color, name } }) => {
  return (
    <div
      className={`d-flex align-items-center selector-line ${className}`}
      style={{ borderLeft: `10px solid ${color}` }}
    >
      {name}
    </div>
  );
};

SelectorLine.defaultProps = {
  className: ''
};

SelectorLine.propTypes = {
  className: PropTypes.string,
  line: PropTypes.shape({
    color: PropTypes.string,
    name: PropTypes.string
  }).isRequired
};

export default SelectorLine;
