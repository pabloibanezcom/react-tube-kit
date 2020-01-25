import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Icon from '../icon/icon';

const Input = React.forwardRef(
  (
    {
      accept,
      bgColor,
      bgShow,
      className,
      clearable,
      color,
      defaultValue,
      disabled,
      icon,
      multiple,
      name,
      placeholder,
      readOnly,
      resetValue,
      value,
      type,
      onBlur,
      onChange,
      onClick
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = useState(defaultValue || '');

    useEffect(() => {
      setCurrentValue(value || '');
    }, [value]);

    const handleOnChange = newValue => {
      setCurrentValue(newValue);
      onChange(newValue);
      if (resetValue) {
        setCurrentValue('');
      }
    };

    const clearValue = () => {
      handleOnChange('');
    };

    return (
      <div className="input-wrapper">
        <input
          ref={ref}
          type={type}
          accept={accept}
          className={`input input-underline-${bgColor} ${
            bgShow ? 'input-underline-show' : ''
          } text-${color} ${icon ? 'input-with-icon' : ''} px-1 ${className}`}
          name={name}
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          multiple={multiple}
          onBlur={onBlur}
          onChange={evt => handleOnChange(evt.target.value)}
          onClick={onClick}
        />
        {icon ? <Icon className="input-icon" name={icon} /> : null}
        {clearable && currentValue ? (
          <button className="input-clearable-btn" type="button" onClick={clearValue}>
            <Icon name="close" size="sm" />
          </button>
        ) : null}
      </div>
    );
  }
);

Input.defaultProps = {
  accept: null,
  bgColor: 'primary',
  bgShow: false,
  className: '',
  clearable: false,
  color: 'secondary',
  defaultValue: '',
  disabled: false,
  icon: null,
  multiple: null,
  name: null,
  placeholder: null,
  readOnly: false,
  resetValue: false,
  value: '',
  type: 'text',
  onBlur: () => {},
  onChange: () => {},
  onClick: () => {}
};

Input.propTypes = {
  accept: PropTypes.string,
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
  bgShow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
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
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  resetValue: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'tel', 'file']),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default Input;
