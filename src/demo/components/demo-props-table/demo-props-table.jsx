import React from 'react';
import JsxParser from 'react-jsx-parser';
import { Link } from 'react-router-dom';
import { isObject } from 'util/object';
import { isEmpty } from '../../../lib/util/object';

const getRenderHtml = str => {
  return <JsxParser components={{ Link }} jsx={str} />;
};

const DemoPropsTable = ({ componentData: { properties, methods } }) => {
  return (
    <div className="demo-props-table">
      {properties ? (
        <div>
          <h3 name="properties" className="mb-4">
            Properties
          </h3>
          <div className="table-wrapper">
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
                {Object.keys(properties).map(propName => (
                  <tr key={propName}>
                    <td>{propName}</td>
                    <td>{getTypeLabel(properties[propName].type)}</td>
                    <td>{getRequiredLabel(properties[propName].isRequired)}</td>
                    <td>
                      {!(
                        Array.isArray(properties[propName].default) ||
                        typeof properties[propName].default === 'object'
                      )
                        ? properties[propName].default
                        : JSON.stringify(properties[propName].default)}
                    </td>
                    <td>{getRenderHtml(properties[propName].description)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
      {!isEmpty(methods) ? (
        <div className="mt-8">
          <h3 name="methods" className="mb-4">
            Methods
          </h3>
          <div className="table-wrapper">
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
                    <td>{getRenderHtml(methods[methodName].description)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
};

const getTypeLabel = type => {
  const getTypeStr = typeStr => {
    if (
      typeStr === 'string' ||
      typeStr === 'number' ||
      typeStr === 'bool' ||
      typeStr === 'array' ||
      typeStr === 'func'
    ) {
      return <span className="primary-type">{typeStr}</span>;
    }
    return (
      <span className="custom-type">{isObject(typeStr) ? JSON.stringify(typeStr) : typeStr}</span>
    );
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
