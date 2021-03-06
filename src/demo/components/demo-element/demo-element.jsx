import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import JsxParser from 'react-jsx-parser';
import { withRouter } from 'react-router-dom';
import { Icon } from '../../../lib';
import getComponentsForParser from '../../util/getComponentsForParser';

require('codemirror/mode/xml/xml');

const DemoElement = ({
  history,
  component,
  example: { id, name, html, multi, bindings, actions, disableCode, disableExample, url },
  options
}) => {
  const [showCode, setShowCode] = useState(false);
  const [actionFlags, setActionFlags] = useState(
    actions ? Object.assign(...actions.map(act => ({ [act.propName]: false }))) : null
  );

  const fireAction = action => {
    if (action.propName) {
      setActionFlags({ ...actionFlags, [action.propName]: !actionFlags[action.propName] });
    }
    if (action.to) {
      history.push(url);
    }
    if (action.func) {
      action.func(id);
    }
  };

  const actionButtons = () =>
    actions.map((act, i) => (
      <button
        key={i}
        type="button"
        className="demo-element__btn d-flex align-items-center"
        onClick={() => fireAction(act)}
      >
        <Icon name={act.icon} className="mr-2 opacity-7" size="sm" />
        {actionFlags[act.propName] && act.textActive ? act.textActive : act.text}
      </button>
    ));

  return (
    <div name={id} className="demo-element">
      <h3 className="mb-2">{name}</h3>
      <div className="demo-element__container">
        <div
          className={`demo-element__show w-${options.width} ${
            options.flexColumn ? 'flexColumn' : ''
          } ${multi ? 'multi' : ''}`}
        >
          {!disableExample ? (
            <JsxParser
              bindings={{ ...bindings, ...actionFlags }}
              components={getComponentsForParser(component)}
              jsx={`${html}`}
              blacklistedAttrs={[]}
            />
          ) : null}
        </div>
        {!disableCode ? (
          <div className="demo-element__code">
            <div className="demo-element__buttons d-flex">
              {actions ? actionButtons() : null}
              <button
                type="button"
                className="demo-element__btn demo-show-code-btn d-flex align-items-center"
                onClick={() => setShowCode(!showCode)}
              >
                <Icon name="code" className="mr-2 opacity-7" size="sm" />
                {!showCode ? 'Show code' : 'Hide code'}
              </button>
            </div>
            <div className={`demo-element__codemirror ${showCode ? 'shown' : ''}`}>
              <div className="demo-element__codemirror__overlay" />
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
  options: {
    width: 'default'
  }
};

DemoElement.propTypes = {
  component: PropTypes.string.isRequired,
  example: PropTypes.shape({
    actions: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        textActive: PropTypes.string,
        propName: PropTypes.string
      })
    ),
    bindings: PropTypes.object,
    disableCode: PropTypes.bool,
    disableExample: PropTypes.bool,
    id: PropTypes.string,
    html: PropTypes.string,
    name: PropTypes.string,
    multi: PropTypes.bool,
    url: PropTypes.string
  }).isRequired,
  options: PropTypes.shape({
    width: PropTypes.string
  })
};

export default withRouter(DemoElement);
