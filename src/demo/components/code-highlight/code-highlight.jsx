import PropTypes from 'prop-types';
import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/css/css');
require('codemirror/mode/sass/sass');
require('codemirror/mode/shell/shell');

const CodeHighlight = ({ children, className, mode }) => (
  <div className={`code-highlight ${className}`}>
    <CodeMirror
      value={children}
      options={{
        mode,
        theme: 'material',
        lineNumbers: false,
        smartIndent: true,
        indentWithTabs: true,
        readOnly: true
      }}
    />
  </div>
);

CodeHighlight.defaultProps = {
  className: ''
};

CodeHighlight.propTypes = {
  className: PropTypes.string,
  mode: PropTypes.string.isRequired
};

export default CodeHighlight;
