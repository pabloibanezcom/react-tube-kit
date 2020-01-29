import React from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import componentData from './icon.data.json';

const Icon = ({ color, className, name, size, type }) => (
  <i
    className={`icon icon-${name} icon-${size} ${
      !color && type ? `text-${type}` : ''
    } ${className}`}
    style={{ color }}
  />
);

Object.assign(Icon, generateComponentProps(componentData));

export default Icon;
