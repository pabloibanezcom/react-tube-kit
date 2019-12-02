import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import menuElements from './demo-menu.data.json';

const DemoMenu = ({ currentPage }) => {
  const [activeSections, setActiveSections] = useState(currentPage.split('/')[1]);

  const renderMenuElementTitle = (el, urlElements) => (
    <Fragment>
      <li className="group-title">
        <a onClick={() => setActiveSections([...urlElements, el.url])}>{el.name}</a>
      </li>
      <li className="demo-menu__submenu">
        <ul className={`demo-menu__submenu-list ${activeSections.includes(el.url) ? 'shown' : ''}`}>
          {el.children.map((child, i) => (
            <Fragment key={i}>{renderMenuElement(child, [...urlElements, el.url])}</Fragment>
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
          renderMenuElementTitle(el, urlElements)
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
