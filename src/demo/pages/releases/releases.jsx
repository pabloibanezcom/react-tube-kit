import React from 'react';
import releases from '../../releases.json';

const Releases = () => {
  const renderGroup = (name, elements) => {
    if (elements && elements.length) {
      return (
        <div className="mt-2">
          <h4>{name}</h4>
          <h5 className="mt-2">Components</h5>
          <ul className="list-disc mt-1">
            {elements.map(el => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <h1 className="right-line mb-4">Releases</h1>
        <h4 className="font-weight-light">
          A complete release history for React Tube Kit is available on GitHub. Documentation for
          recent releases can also be found below.
        </h4>
        <div className="row ">
          <div className="col-lg-9">
            <div className="mt-8">
              {releases.map((rel, i) => (
                <div key={rel.version} name={`pepe${i}`} className="mb-6">
                  <h3>
                    {rel.version}{' '}
                    <span className="ml-2 font-weight-light font-size-18">({rel.date})</span>
                  </h3>
                  {renderGroup('Added', rel.added)}
                  {renderGroup('Modified', rel.modified)}
                  {renderGroup('Removed', rel.removed)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Releases;
