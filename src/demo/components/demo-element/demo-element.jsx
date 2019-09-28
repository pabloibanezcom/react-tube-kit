import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import JsxParser from 'react-jsx-parser';
import getComponentsForParser from '../../util/getComponentsForParser';

require('codemirror/mode/xml/xml');

const DemoElement = ({ component, example: { id, name, html, multi }, bindings, options }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div name={id} className="demo-element">
      <h3 className="mb-2">{name}</h3>
      <div className="demo-element__container">
        <div
          className={`demo-element__show ${options && options.fullWidth ? 'fullWidth' : ''} ${
            multi ? 'multi' : ''
          }`}
        >
          <JsxParser
            bindings={bindings}
            components={getComponentsForParser(component)}
            jsx={`<div>${html}</div>`}
          />
        </div>
        <div className="demo-element__code">
          <button
            type="button"
            className="demo-show-code-btn"
            onClick={() => setShowCode(!showCode)}
          >
            {!showCode ? 'Show code' : 'Hide code'}
          </button>
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
      </div>
    </div>
  );
};

export default DemoElement;
