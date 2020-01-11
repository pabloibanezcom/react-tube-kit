import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Badge from '../badge/badge';

const CountryLabel = ({
  backgroundColor,
  badge,
  block,
  border,
  className,
  color,
  country: { code, name },
  size,
  weight,
  type
}) => {
  const basicLabel = (
    <Fragment>
      <div className={`country-flag flag-${code.toLowerCase()} ${badge ? 'flag-small' : null}`} />
      <span className="country-name">{name}</span>
    </Fragment>
  );

  return (
    <div className={`d-flex align-items-center country-label country-label--${size} ${className}`}>
      {!badge ? (
        basicLabel
      ) : (
        <Badge
          backgroundColor={backgroundColor}
          block={block}
          border={border}
          color={color}
          weight={weight}
          type={type}
        >
          {basicLabel}
        </Badge>
      )}
    </div>
  );
};

CountryLabel.defaultProps = {
  backgroundColor: null,
  badge: false,
  block: false,
  border: false,
  className: '',
  color: null,
  size: 'md',
  weight: 'normal',
  type: 'primary'
};

CountryLabel.propTypes = {
  backgroundColor: PropTypes.string,
  badge: PropTypes.bool,
  block: PropTypes.bool,
  border: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  country: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  weight: PropTypes.oneOf(['bold', 'normal', 'light']),
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning'])
};

export default CountryLabel;
