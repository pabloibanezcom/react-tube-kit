/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import randomId from '../../util/randomId';
import Button from '../button/button';
import Icon from '../icon/icon';

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

Dropdown.defaultProps = {
  buttonProps: null,
  className: '',
  id: null,
  menuMarginTop: null,
  showArrow: false
};

Dropdown.propTypes = {
  buttonProps: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  menuMarginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showArrow: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default Dropdown;
