import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import generateComponentProps from '../../util/generateComponentProps';
import getDisplayClass from '../../util/getDisplayClass';
import Icon from '../icon/icon';
import componentData from './bottom-menu.data.json';

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

Object.assign(BottomMenu, generateComponentProps(componentData));

export default BottomMenu;
