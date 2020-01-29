import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const TopNavbarMobileMenu = ({ menuElements, shown, onSelected }) => {
  return (
    <div className={`top-navbar-mobile-menu ${shown ? 'shown' : ''}`}>
      <ul>
        {menuElements.map(mElement => (
          <li key={mElement.name}>
            <Link className="text-white" to={mElement.url} onClick={onSelected}>
              {mElement.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

TopNavbarMobileMenu.defaultProps = {
  shown: false,
  onSelected: () => {}
};

TopNavbarMobileMenu.propTypes = {
  menuElements: PropTypes.array.isRequired,
  shown: PropTypes.bool,
  onSelected: PropTypes.func
};

export default TopNavbarMobileMenu;
