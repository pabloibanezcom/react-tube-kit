import React, { useEffect, useState } from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import Icon from '../icon/icon';
import componentData from './input.data.json';

const Input = React.forwardRef(
  (
    {
      accept,
      bgColor,
      bgShow,
      className,
      clearable,
      color,
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
    const [currentValue, setCurrentValue] = useState(value || '');

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

Object.assign(Input, generateComponentProps(componentData));

export default Input;
