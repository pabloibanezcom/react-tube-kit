/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import Icon from '../icon/icon';
import componentData from './collapsible-list.data.json';

const CollapsibleList = ({
  bindings,
  className,
  color,
  content,
  elements,
  header,
  onElementSelected
}) => {
  const [activeElementId, setActiveElementId] = useState(false);

  const setActiveElement = el => {
    setActiveElementId(activeElementId !== el._id ? el._id : null);
    onElementSelected(el);
  };

  const Header = header;
  const Content = content;

  return (
    <ul className={`collapsible-list collapsible-list-${color} ${className}`}>
      {elements.map((el, i) => (
        <li key={i}>
          <div className={`collapsible-list-element ${activeElementId === el._id ? 'shown' : ''}`}>
            <div className="collapsible-list-header">
              <a onClick={() => setActiveElement(el)}>
                <div className="collapsible-list-header-container">
                  <Header element={el} />
                  <Icon name="angle-down" />
                </div>
              </a>
            </div>
            <div className="collapsible-list-content">
              <Content element={el} bindings={bindings} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

Object.assign(CollapsibleList, generateComponentProps(componentData));

export default CollapsibleList;
