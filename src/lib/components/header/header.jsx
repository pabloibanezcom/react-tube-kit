import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button } from '../..';
import getDisplayClass from '../../util/getDisplayClass';

// const menuElements = [
//   {
//     name: 'Badges',
//     url: '/components/badges'
//   },
//   {
//     name: 'Buttons & Links',
//     url: '/components/buttons'
//   },
//   {
//     name: 'Collapsible ists',
//     url: '/components/collapsible-lists'
//   },
//   {
//     name: 'Color labels',
//     url: '/components/color-labels'
//   }
// ];

const Header = ({
  animated,
  logo,
  menuButtonDisplay,
  rightContent,
  title,
  titleDisplay,
  subtitle
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="header__container container d-flex align-items-center h-100 p-0">
        <div className="header__left flex-grow-1 pl-3">
          <div className="header__title d-flex align-items-center">
            {logo ? (
              <img
                className={`header__logo ${
                  animated ? 'animated zoomInDown animation-delay-5' : null
                }`}
                src={logo}
                alt="Logo"
              />
            ) : null}
            {title ? (
              <h1
                className={`${getDisplayClass(titleDisplay)} ${
                  animated ? 'animated fadeInRight animation-delay-6' : null
                }`}
              >
                {title}
                <span className="header__subtitle">{subtitle}</span>
              </h1>
            ) : null}
          </div>
        </div>
        <div className="header__right pr-3">
          <Button
            color="transparent"
            icon="menu"
            iconColor="white"
            size="lg"
            className={`${getDisplayClass(menuButtonDisplay)} header__menu-buttom p-0`}
            onClick={() => setShowMenu(!showMenu)}
          />
          <div className="d-none d-md-flex">{rightContent}</div>
        </div>
      </div>
      <div className={`${getDisplayClass(menuButtonDisplay)}`} />
    </header>
  );
};

Header.defaultProps = {
  animated: false,
  logo: null,
  menuButtonDisplay: '-md',
  rightContent: null,
  title: null,
  titleDisplay: 'md-',
  subtitle: null
};

Header.propTypes = {
  animated: PropTypes.bool,
  logo: PropTypes.node,
  menuButtonDisplay: PropTypes.string,
  rightContent: PropTypes.element,
  title: PropTypes.string,
  titleDisplay: PropTypes.string,
  subtitle: PropTypes.string
};

export default Header;
