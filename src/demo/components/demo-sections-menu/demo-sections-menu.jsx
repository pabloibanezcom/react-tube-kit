import React, { Fragment } from 'react';
import { Link } from 'react-scroll';
import { isEmpty } from '../../../lib/util/object';

const DemoSectionsMenu = ({ examples, componentData: { properties, methods, events } }) => {
  const apiLink = name => {
    return (
      <li>
        <Link to={name.toLowerCase()} smooth offset={-70} duration={500}>
          {name}
        </Link>
      </li>
    );
  };

  return (
    <div className="demo-sections-menu">
      <h4 className="mb-1">
        <Link to="overview" smooth offset={-70} duration={500}>
          Overview
        </Link>
      </h4>
      {examples ? (
        <Fragment>
          <h4 className="mb-1 mt-4">Examples</h4>
          <ul>
            {examples.map(example => (
              <li key={example.id}>
                <Link to={example.id} smooth offset={-70} duration={500}>
                  {example.name}
                </Link>
              </li>
            ))}
          </ul>
        </Fragment>
      ) : null}
      {properties || methods || events ? (
        <Fragment>
          <h4 className="mb-1 mt-4">API Reference</h4>
          <ul>
            {!isEmpty(properties) ? apiLink('Properties') : null}
            {!isEmpty(methods) ? apiLink('Methods') : null}
            {!isEmpty(events) ? apiLink('Events') : null}
          </ul>
        </Fragment>
      ) : null}
    </div>
  );
};

export default DemoSectionsMenu;
