import React from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import Icon from '../icon/icon';
import componentData from './panel.data.json';

const panel = ({ background, children, className, headerColor, headerIcon, headerText, width }) => (
  <div className={`panel ${className}`}>
    {headerText ? (
      <div className={`panel-header panel-${headerColor}`}>
        <span className="mb-0 mt-0 d-flex align-items-center font-weight-normal">
          {headerIcon ? <Icon name={headerIcon} className="mr-2" /> : null}
          {headerText}
        </span>
      </div>
    ) : null}
    <div className={`panel-content panel-${background}`} style={width ? { width } : null}>
      {children}
    </div>
  </div>
);

Object.assign(panel, generateComponentProps(componentData));

export default panel;
