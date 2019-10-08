import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ subtitle }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">
          <div className="header__left">
            <span className="header__logo animated zoomInDown animation-delay-5">T</span>
            <h1 className="animated fadeInRight animation-delay-6">
              Tube History<span> Map</span>
              <span className="header__subtitle">{subtitle}</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  subtitle: null
};

Header.propTypes = {
  subtitle: PropTypes.string
};

export default Header;
