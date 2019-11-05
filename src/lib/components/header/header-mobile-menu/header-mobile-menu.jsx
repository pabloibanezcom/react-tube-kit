import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMobileMenu = ({ menuElements, shown, onSelected }) => {
  return (
    <div className={`header-mobile-menu ${shown ? 'shown' : ''}`}>
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

HeaderMobileMenu.defaultProps = {
  shown: false,
  onSelected: () => {}
};

HeaderMobileMenu.propTypes = {
  menuElements: PropTypes.array.isRequired,
  shown: PropTypes.bool,
  onSelected: PropTypes.func
};

export default HeaderMobileMenu;
