import React from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import componentData from './label.data.json';

const Label = ({ children, className, color, forhtml, weight }) => (
  <label className={`label text-${color} font-weight-${weight} ${className}`} forhtml={forhtml}>
    {children}
  </label>
);

Object.assign(Label, generateComponentProps(componentData));

export default Label;
