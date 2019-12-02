import PropTypes from 'prop-types';
import React, { Fragment, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import useOutsideClick from '../../../util/useOutsideClick';
import Icon from '../../icon/icon';

const SideNavbar = ({
  align,
  className,
  currentPage,
  elements,
  shown,
  isSticky,
  isStretch,
  onClose
}) => {
  const [activeSections, setActiveSections] = useState(currentPage ? currentPage.split('/') : null);
  const navbarRef = useRef();

  useOutsideClick(navbarRef, () => {
    close();
  });

  const close = () => {
    if (shown && !isSticky && !isStretch) {
      onClose();
    }
  };

  const handleMenuElementClick = (urlElements, clickedElement) => {
    if (activeSections && activeSections.indexOf(clickedElement) > -1) {
      setActiveSections(activeSections.splice(0, activeSections.indexOf(clickedElement)));
    } else {
      setActiveSections([...urlElements, clickedElement]);
    }
  };

  const renderMenuElementTitle = (el, urlElements, level) => (
    <Fragment>
      <li className="side-navbar__group-title">
        <a
          className="side-navbar__group-title-link"
          role="button"
          tabIndex="-1"
          onClick={() => handleMenuElementClick(urlElements, el.url)}
        >
          <div
            className="d-flex align-items-center justify-content-between"
            style={{
              paddingLeft: 10 * level
            }}
          >
            <div className="d-flex align-items-center">
              {el.icon ? <Icon name={el.icon} className="side-navbar__nav-icon mr-3" /> : null}
              {el.name}
            </div>
            <div className="d-flex align-items-center">
              <Icon
                name={
                  activeSections && activeSections.includes(el.url) ? 'angle-down' : 'angle-right'
                }
              />
            </div>
          </div>
        </a>
      </li>
      <li
        className={`side-navbar__submenu ${
          activeSections && activeSections.includes(el.url) ? 'side-navbar__submenu--shown' : ''
        }`}
      >
        <ul className="side-navbar__nav-list">
          {el.children.map((child, i) => (
            <Fragment key={i}>
              {renderMenuElement(
                child,
                [...urlElements, el.url],
                activeSections ? 1 + activeSections.indexOf(el.url) : 0
              )}
            </Fragment>
          ))}
        </ul>
      </li>
    </Fragment>
  );

  const renderMenuElement = (el, urlElements, level) => {
    const url = `/${[...urlElements, el.url].join('/')}`;
    return (
      <Fragment>
        {el.children ? (
          renderMenuElementTitle(el, urlElements, level)
        ) : (
          <li
            className={`side-navbar__nav-item ${
              currentPage === url ? 'side-navbar__nav-item--active' : ''
            }`}
          >
            <Link className="side-navbar__nav-link" to={url} onClick={close}>
              <div
                className="d-flex align-items-center"
                style={{
                  paddingLeft: 10 * level
                }}
              >
                {el.icon ? <Icon name={el.icon} className="side-navbar__nav-icon mr-3" /> : null}
                {el.name}
              </div>
            </Link>
          </li>
        )}
      </Fragment>
    );
  };

  return (
    <div
      ref={navbarRef}
      className={`side-navbar side-navbar--${align} ${className} ${
        !shown && !isSticky ? 'side-navbar--hiden' : ''
      } ${isSticky ? 'side-navbar--sticky' : ''} ${isStretch ? 'side-navbar--stretch' : ''}`}
    >
      <Scrollbars
        renderThumbVertical={({ style, ...props }) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <div {...props} style={{ ...style, backgroundColor: '#fff', opacity: 0.2, width: 5 }} />
        )}
      >
        <ul className="side-navbar__nav-list">
          {elements.map((el, i) => (
            <Fragment key={i}>{renderMenuElement(el, [], 0)}</Fragment>
          ))}
        </ul>
      </Scrollbars>
    </div>
  );
};

SideNavbar.defaultProps = {
  align: 'left',
  className: '',
  currentPage: null,
  elements: [],
  isSticky: false,
  isStretch: false,
  shown: false,
  onClose: () => {}
};

SideNavbar.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  currentPage: PropTypes.string,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  isSticky: PropTypes.bool,
  isStretch: PropTypes.bool,
  shown: PropTypes.bool,
  onClose: PropTypes.func
};

export default SideNavbar;
