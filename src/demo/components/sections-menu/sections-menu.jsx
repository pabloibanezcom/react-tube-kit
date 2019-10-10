import React from 'react';
import { Link } from 'react-scroll';

const SectionsMenu = ({ sections }) => {
  return (
    <div className="sections-menu">
      <ul>
        {sections.map(section => (
          <li key={section.toLowerCase()}>
            <Link to={section.toLowerCase()} smooth offset={10} duration={500}>
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionsMenu;
