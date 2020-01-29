/* eslint-disable no-nested-ternary */
import React from 'react';
import { getAlternateColor } from '../../util/color';
import generateComponentProps from '../../util/generateComponentProps';
import componentData from './badge.data.json';

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

Object.assign(Badge, generateComponentProps(componentData));

export default Badge;
