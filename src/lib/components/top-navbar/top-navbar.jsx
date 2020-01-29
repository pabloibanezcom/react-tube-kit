import React from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import getDisplayClass from '../../util/getDisplayClass';
import Button from '../button/button';
import componentData from './top-navbar.data.json';

const TopNavbar = ({
  animated,
  className,
  logo,
  menuButtonDisplay,
  rightContent,
  subtitle,
  title,
  titleDisplay,
  onMenuClick
}) => {
  return (
    <header className={`top-navbar ${className}`}>
      <div className="top-navbar__container container d-flex align-items-center h-100 p-0">
        <div className="top-navbar__left flex-grow-1 pl-3">
          <div className="d-flex align-items-center">
            {logo ? (
              <img
                className={`top-navbar__logo ${
                  animated ? 'animated zoomInDown animation-delay-5' : null
                }`}
                src={logo}
                alt="Logo"
              />
            ) : null}
            {title ? (
              <h1
                className={`top-navbar__title ${getDisplayClass(titleDisplay)} ${
                  animated ? 'animated fadeInRight animation-delay-6' : ''
                }`}
              >
                {title}
                <span className="top-navbar__subtitle">{subtitle}</span>
              </h1>
            ) : null}
          </div>
        </div>
        <div className="top-navbar__right pr-3">
          <Button
            color="transparent"
            icon="menu"
            iconColor="white"
            size="lg"
            className={`${getDisplayClass(menuButtonDisplay)} top-navbar__menu-buttom p-0`}
            onClick={onMenuClick}
          />
          <div className="d-none d-md-flex">{rightContent}</div>
        </div>
      </div>
      <div className={`${getDisplayClass(menuButtonDisplay)}`} />
    </header>
  );
};

Object.assign(TopNavbar, generateComponentProps(componentData));

export default TopNavbar;
