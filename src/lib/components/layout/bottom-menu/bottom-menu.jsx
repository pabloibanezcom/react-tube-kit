import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getDisplayClass from '../../../util/getDisplayClass';
import Icon from '../../icon/icon';

const BottomMenu = ({ className, display, elements, scrollHide }) => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    setPrevScrollpos(window.pageYOffset);
    setVisible(prevScrollpos > window.pageYOffset);
  };

  useEffect(() => {
    if (scrollHide) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  });

  return (
    <div
      className={`bottom-menu ${!visible ? 'hiden' : null}  ${getDisplayClass(
        display
      )} ${className}`}
    >
      <ul>
        {elements.map(mEl => (
          <li key={mEl.name}>
            <Link to={mEl.url}>
              <Icon name={mEl.icon} color="white" />
              <span>{mEl.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

BottomMenu.defaultProps = {
  className: '',
  elements: [],
  display: '-md',
  scrollHide: false
};

BottomMenu.propTypes = {
  className: PropTypes.string,
  display: PropTypes.string,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  scrollHide: PropTypes.bool
};

export default BottomMenu;
