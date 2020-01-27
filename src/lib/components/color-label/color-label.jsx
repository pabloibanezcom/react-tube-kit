import React from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import componentData from './color-label.data.json';

const ColorLabel = ({ className, color }) => (
  <div className={`d-flex align-items-center color-label ${className}`}>
    <div className="color-label__color-box">
      <div style={{ backgroundColor: color }} />
    </div>
    {color}
  </div>
);

Object.assign(ColorLabel, generateComponentProps(componentData));

export default ColorLabel;
