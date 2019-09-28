import React from 'react';

const DemoPropsTable = ({ properties: { options, methods } }) => {
  return (
    <div className="demo-props-table mt-12">
      {options ? (
        <div>
          <h2 name="options" className="mb-4">
            Options
          </h2>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Required</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(options).map(propName => (
                <tr key={propName}>
                  <td>{propName}</td>
                  <td>{getTypeLabel(options[propName].type)}</td>
                  <td>{getRequiredLabel(options[propName].isRequired)}</td>
                  <td>{options[propName].default}</td>
                  <td>{options[propName].description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {methods ? (
        <div className="mt-40">
          <h2 name="methods" className="mb-4">
            Methods
          </h2>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(methods).map(methodName => (
                <tr key={methodName}>
                  <td>{methodName}</td>
                  <td>{methods[methodName].description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

const getTypeLabel = type => {
  const getTypeStr = typeStr => {
    if (typeStr === 'string' || typeStr === 'number' || typeStr === 'bool') {
      return <span className="primary-type">{typeStr}</span>;
    }
    return <span className="custom-type">{typeStr}</span>;
  };

  if (!Array.isArray(type)) {
    return getTypeStr(type);
  }
  const result = (
    <div className="d-flex flex-column">
      {type.map(t => (
        <React.Fragment key={t}>{getTypeStr(t)}</React.Fragment>
      ))}
    </div>
  );
  return result;
};

const getRequiredLabel = isRequired => {
  return isRequired ? (
    <span className="required-yes">yes</span>
  ) : (
    <span className="required-no">no</span>
  );
};

export default DemoPropsTable;
