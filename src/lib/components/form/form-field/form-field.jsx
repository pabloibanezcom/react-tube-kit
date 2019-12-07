/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import ColorSelector from '../../color-selector/color-selector';
import Input from '../../input/input';
import Selector from '../../selector/selector';

const getTypeComponent = type => {
  switch (type) {
    case 'input':
      return Input;
    case 'selector':
      return Selector;
    case 'colorSelector':
      return ColorSelector;
    default:
      return null;
  }
};

const FormField = ({
  className,
  error,
  errorClassName,
  label,
  labelClassName,
  name,
  fieldProps,
  type,
  onChange
}) => {
  const FieldComponent = getTypeComponent(type);

  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={name} className={`form-field__label ${labelClassName}`}>
        {label}
      </label>
      {FieldComponent ? (
        <div className="form-field__control">
          <FieldComponent
            name={name}
            {...fieldProps}
            onChange={onChange}
            bgColor={error ? 'danger' : null}
            bgShow={error}
          />
        </div>
      ) : null}
      <div
        className={`form-field__error-msg animation-opacity ${
          error ? 'animation-opacity--shown' : ''
        } ${errorClassName}`}
      >
        {error || 'Initial text'}
      </div>
    </div>
  );
};

FormField.defaultProps = {
  className: '',
  error: null,
  errorClassName: 'text-danger font-weight-normal',
  label: null,
  labelClassName: 'font-weight-normal',
  name: null,
  fieldProps: null,
  type: 'input',
  onChange: () => {}
};

FormField.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  errorClassName: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  fieldProps: PropTypes.any,
  type: PropTypes.oneOf(['input', 'selector', 'colorSelector']),
  onChange: PropTypes.func
};

export default FormField;
