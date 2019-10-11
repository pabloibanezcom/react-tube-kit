import PropTypes from 'prop-types';
import React from 'react';

const CountryLabel = ({ country: { code, name }, className }) => {
  return (
    <div className={`d-flex align-items-center country-label ${className}`}>
      {/* <img
        className="country-flag"
        alt={code}
        src={getImage(`countries/${code.toLowerCase()}.png`, 'countries/default.png')}
      /> */}
      <div className={`country-flag flag-${code.toLowerCase()}`} />
      <span className="country-name">{name}</span>
    </div>
  );
};

CountryLabel.defaultProps = {
  className: ''
};

CountryLabel.propTypes = {
  className: PropTypes.string,
  country: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string
  }).isRequired
};

export default CountryLabel;
