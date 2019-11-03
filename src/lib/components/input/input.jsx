import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Icon from '../icon/icon';

const Input = ({
  bgColor,
  className,
  clearable,
  color,
  defaultValue,
  disabled,
  icon,
  placeholder,
  readOnly,
  type,
  onChange,
  onClick
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleOnChange = newValue => {
    setValue(newValue);
    onChange(newValue);
  };

  const clearValue = () => {
    handleOnChange('');
  };

  return (
    <div className="input-wrapper">
      <input
        type={type}
        className={`input input-underline-${bgColor} text-${color} ${
          icon ? 'input-with-icon' : null
        } ${className}`}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onChange={evt => handleOnChange(evt.target.value)}
        onClick={onClick}
      />
      {icon ? <Icon className="input-icon" name={icon} /> : null}
      {clearable && value ? (
        <button className="input-clearable-btn" type="button" onClick={clearValue}>
          <Icon name="close" size="sm" />
        </button>
      ) : null}
    </div>
  );
};

Input.defaultProps = {
  bgColor: 'primary',
  className: '',
  clearable: false,
  color: 'secondary',
  defaultValue: '',
  disabled: false,
  icon: null,
  placeholder: null,
  readOnly: false,
  type: 'text',
  onChange: () => {},
  onClick: () => {}
};

Input.propTypes = {
  bgColor: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark',
    'white'
  ]),
  className: PropTypes.string,
  clearable: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'light',
    'dark',
    'muted',
    'white'
  ]),
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'tel']),
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default Input;
