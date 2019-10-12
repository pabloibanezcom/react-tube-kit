import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import JsxParser from 'react-jsx-parser';
import getComponentsForParser from '../../util/getComponentsForParser';

require('codemirror/mode/xml/xml');

const DemoElement = ({
  actions,
  component,
  example: { id, name, html, multi, disableCode },
  bindings,
  options
}) => {
  const [showCode, setShowCode] = useState(false);
  const [actionFlags, setActionFlags] = useState(
    actions.length ? Object.assign(...actions.map(act => ({ [act.propName]: false }))) : null
  );

  const toggleActionFlag = action => {
    setActionFlags({ ...actionFlags, [action]: !actionFlags[action] });
  };

  return (
    <div name={id} className="demo-element">
      <h3 className="mb-2">{name}</h3>
      <div className="demo-element__container">
        <div
          className={`demo-element__show ${options.fullWidth ? 'fullWidth' : ''} ${
            options.flexColumn ? 'flexColumn' : ''
          } ${multi ? 'multi' : ''}`}
        >
          <JsxParser
            bindings={{ ...bindings, ...actionFlags }}
            components={getComponentsForParser(component)}
            jsx={`<div>${html}</div>`}
          />
        </div>
        {!disableCode ? (
          <div className="demo-element__code">
            <div className="demo-element__buttons">
              {actions.map(act => (
                <button
                  key={act.propName}
                  type="button"
                  className="demo-element__btn"
                  onClick={() => toggleActionFlag(act.propName)}
                >
                  {actionFlags[act.propName] ? act.textActive : act.text}
                </button>
              ))}
              <button
                type="button"
                className="demo-element__btn demo-show-code-btn"
                onClick={() => setShowCode(!showCode)}
              >
                {!showCode ? 'Show code' : 'Hide code'}
              </button>
            </div>
            <div className={`demo-element__codemirror ${showCode ? 'shown' : ''}`}>
              <CodeMirror
                value={html}
                options={{
                  mode: 'xml',
                  theme: 'material',
                  lineNumbers: false,
                  smartIndent: true,
                  indentWithTabs: true,
                  readOnly: true
                }}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

DemoElement.defaultProps = {
  actions: [],
  bindings: null,
  options: {}
};

DemoElement.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      textActive: PropTypes.string,
      propName: PropTypes.string
    })
  ),
  bindings: PropTypes.object,
  component: PropTypes.string.isRequired,
  example: PropTypes.shape({
    id: PropTypes.string,
    html: PropTypes.string,
    name: PropTypes.string,
    multi: PropTypes.bool
  }).isRequired,
  options: PropTypes.shape({
    fullWidth: PropTypes.bool
  })
};

export default DemoElement;
