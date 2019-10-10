import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import menuElements from './demo-menu.data.json';

const DemoMenu = ({ currentPage }) => {
  const [activeSection, setActiveSection] = useState(currentPage.split('/')[1]);

  const renderMenuElementTitle = el => (
    <Fragment>
      <li className="group-title">
        <a onClick={() => setActiveSection(el.url)}>{el.name}</a>
      </li>
      <li className="demo-menu__submenu">
        <ul className={`demo-menu__submenu-list ${activeSection === el.url ? 'shown' : ''}`}>
          {el.children.map((child, i) => (
            <Fragment key={i}>{renderMenuElement(child, [el.url])}</Fragment>
          ))}
        </ul>
      </li>
    </Fragment>
  );

  const renderMenuElement = (el, urlElements, isFirstLevel) => {
    const url = `/${[...urlElements, el.url].join('/')}`;
    return (
      <Fragment>
        {el.children ? (
          renderMenuElementTitle(el)
        ) : (
          <li
            className={`link-element ${currentPage === url ? 'active' : ''} ${
              isFirstLevel ? 'group-title' : ''
            }`}
          >
            <Link to={url}>{el.name}</Link>
          </li>
        )}
      </Fragment>
    );
  };

  return (
    <div className="demo-menu flex flex-column">
      <ul className="demo-menu__rootmenu">
        {menuElements.map((el, i) => (
          <Fragment key={i}>{renderMenuElement(el, [], true)}</Fragment>
        ))}
      </ul>
    </div>
  );
};

export default DemoMenu;
