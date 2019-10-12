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
  fontColor
}) => {
  const basicLabel = (
    <Fragment>
      <div className={`country-flag flag-${code.toLowerCase()}`} />
      <span className="country-name">{name}</span>
    </Fragment>
  );

  return (
    <div className={`d-flex align-items-center country-label ${className}`}>
      {!badge ? (
        basicLabel
      ) : (
        <Badge
          backgroundColor={backgroundColor}
          block={block}
          border={border}
          color={color}
          fontColor={fontColor}
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
  color: 'primary',
  fontColor: null
};

CountryLabel.propTypes = {
  backgroundColor: PropTypes.string,
  badge: PropTypes.bool,
  block: PropTypes.bool,
  border: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  country: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  fontColor: PropTypes.string
};

export default CountryLabel;
