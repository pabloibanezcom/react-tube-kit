/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Icon from '../icon/icon';

const CollapsibleList = ({ bindings, className, color, content, elements, header }) => {
  const [activeElementId, setActiveElementId] = useState(false);

  const setActiveElement = el => {
    setActiveElementId(activeElementId !== el._id ? el._id : null);
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

CollapsibleList.defaultProps = {
  bindings: null,
  className: '',
  color: 'light',
  elements: []
};

CollapsibleList.propTypes = {
  bindings: PropTypes.any,
  className: PropTypes.string,
  color: PropTypes.oneOf(['light', 'primary', 'secondary']),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  elements: PropTypes.array,
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired
};

export default CollapsibleList;
