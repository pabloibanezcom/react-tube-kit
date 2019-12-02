import React from 'react';
import { ColorLabel } from '../../../../lib';
import colors from './colors.json';
import fonts from './fonts.json';

const getCustomLabelComponent = (customLabel, variable) => {
  switch (customLabel) {
    case 'ColorLabel':
      return <ColorLabel color={variable.default} />;
    default:
      return null;
  }
};

const variableTable = (variables, customLabel) => (
  <div style={{ overflowX: 'scroll' }}>
    <div style={{ display: 'table-header-group' }}>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {variables.map(variable => (
            <tr key={variable.name}>
              <td>{variable.name}</td>
              <td>
                {customLabel ? getCustomLabelComponent(customLabel, variable) : variable.default}
              </td>
              <td>{variable.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Theming = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-4">Theming</h1>
      <h4 className="font-weight-light">
        Customize React Tube Kit with built-in Sass variables for global style preferences for easy
        theming and component changes.
      </h4>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          <div className="mt-8">
            <h3 className="mb-2">Colors</h3>
            {variableTable(colors, 'ColorLabel')}
          </div>
          <div className="mt-8">
            <h3 className="mb-2">Fonts</h3>
            {variableTable(fonts)}
          </div>
        </div>
        <div className="col-lg-3" />
      </div>
    </div>
  </div>
);

export default Theming;
