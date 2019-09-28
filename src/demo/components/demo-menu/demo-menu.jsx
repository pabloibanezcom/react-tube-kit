import React from 'react';
import { Link } from 'react-router-dom';
import menuElements from './demo-menu.data.json';

const DemoMenu = ({ currentPage }) => {
  return (
    <div className="demo-menu flex flex-column">
      <ul>
        <li className="group-title">UI components</li>
        {menuElements.map(el => (
          <li key={el.url} className={`link-element ${currentPage === el.url ? 'active' : ''}`}>
            <Link to={`/demo/${el.url}`}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DemoMenu;
