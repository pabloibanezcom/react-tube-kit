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
  fieldClassName,
  label,
  labelClassName,
  name,
  fieldProps,
  showLabel,
  type,
  value,
  valueProp,
  onChange
}) => {
  const FieldComponent = getTypeComponent(type);

  return (
    <div className={`form-field ${className}`}>
      {showLabel ? (
        <label htmlFor={name} className={`form-field__label text-muted ${labelClassName}`}>
          {label}
        </label>
      ) : null}
      {FieldComponent ? (
        <div className={`form-field__control ${fieldClassName}`}>
          <FieldComponent
            name={name}
            {...{ [valueProp]: value }}
            {...fieldProps}
            onChange={onChange}
            bgColor={error ? 'danger' : null}
            bgShow={error}
          />
        </div>
      ) : null}
      <div
        className={`form-field__error-msg animation-opacity font-size-13 ${
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
  fieldClassName: 'font-weight-normal',
  label: null,
  labelClassName: 'font-weight-normal',
  name: null,
  fieldProps: null,
  showLabel: true,
  type: 'input',
  value: null,
  valueProp: 'defaultValue',
  onChange: () => {}
};

FormField.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  errorClassName: PropTypes.string,
  fieldClassName: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string,
  fieldProps: PropTypes.any,
  showLabel: PropTypes.bool,
  type: PropTypes.oneOf(['input', 'selector', 'colorSelector']),
  value: PropTypes.any,
  valueProp: PropTypes.string,
  onChange: PropTypes.func
};

export default FormField;
