import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ logo, title, subtitle }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">
          <div className="header__left">
            {logo ? (
              <img
                className="header__logo animated zoomInDown animation-delay-5"
                src={logo}
                alt="Logo"
              />
            ) : (
              <span className="header__logo header__letter-logo animated zoomInDown animation-delay-5">
                T
              </span>
            )}
            <h1 className="animated fadeInRight animation-delay-6">
              {title}
              <span className="header__subtitle">{subtitle}</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  logo: null,
  title: 'React Tube Kit',
  subtitle: null
};

Header.propTypes = {
  logo: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Header;
