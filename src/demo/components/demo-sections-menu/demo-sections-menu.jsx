import React, { Fragment } from 'react';
import { Link } from 'react-scroll';

const DemoSectionsMenu = ({ examples, apiSections }) => {
  return (
    <div className="demo-sections-menu">
      <h4 className="mb-2">Examples</h4>
      <ul>
        {examples.map(example => (
          <li key={example.id}>
            <Link to={example.id} smooth offset={10} duration={500}>
              {example.name}
            </Link>
          </li>
        ))}
      </ul>
      {apiSections ? (
        <Fragment>
          <h4 className="mb-2">API Reference</h4>
          <ul>
            {apiSections.map(section => (
              <li key={section.toLowerCase()}>
                <Link to={section.toLowerCase()} smooth offset={10} duration={500}>
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </Fragment>
      ) : null}
    </div>
  );
};

export default DemoSectionsMenu;
