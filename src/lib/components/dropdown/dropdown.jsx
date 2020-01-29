/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import randomId from '../../util/randomId';
import Button from '../button/button';
import Icon from '../icon/icon';
import componentData from './dropdown.data.json';

const Dropdown = ({ buttonProps, children, className, id, menuMarginTop, showArrow, text }) => {
  const [expanded, setExpanded] = useState(false);
  const [dropdownRandomId] = useState(randomId());

  useEffect(() => {
    const checkIfClickOutside = evt => {
      if (
        !evt.path.some(p => p.className && p.className.includes(dropdownRandomId)) ||
        evt.path[0].tagName === 'A'
      ) {
        setExpanded(false);
      }
    };

    window.addEventListener('click', checkIfClickOutside);

    return () => {
      window.removeEventListener('click', checkIfClickOutside);
    };
  }, [dropdownRandomId]);

  return (
    <div
      id={id}
      className={`dropdown dropdown-${dropdownRandomId} ${expanded ? 'show' : ''} ${className}`}
    >
      <Button
        dataToggle="dropdown"
        ariaHaspopup
        ariaExpanded={expanded}
        size="sm"
        onClick={() => setExpanded(!expanded)}
        {...buttonProps}
      >
        <div className="d-flex align-items-center">
          {text}
          <Icon className="ml-2" name="angle-down" />
        </div>
      </Button>
      <div
        className={`dropdown-menu ${expanded ? 'show' : ''} ${
          showArrow ? 'dropdown-menu--arrow' : ''
        }`}
        style={{ marginTop: menuMarginTop }}
        aria-labelledby="dropdownMenuButton"
      >
        {children}
      </div>
    </div>
  );
};

Object.assign(Dropdown, generateComponentProps(componentData));

export default Dropdown;
