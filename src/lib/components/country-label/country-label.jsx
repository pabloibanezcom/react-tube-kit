import React, { Fragment } from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import Badge from '../badge/badge';
import componentData from './country-label.data.json';

const CountryLabel = ({
  backgroundColor,
  badge,
  block,
  border,
  className,
  color,
  country: { code, name },
  customName,
  size,
  weight,
  type
}) => {
  const basicLabel = (
    <Fragment>
      <div className={`country-flag flag-${code.toLowerCase()} ${badge ? 'flag-small' : null}`} />
      <span className="country-name">{customName || name}</span>
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

Object.assign(CountryLabel, generateComponentProps(componentData));

export default CountryLabel;
