/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import generateComponentProps from '../../util/generateComponentProps';
import randomName from '../../util/randomName';
import Button from '../button/button';
import FormField from '../form-field/form-field';
import componentData from './form.data.json';

const Form = ({
  autoComplete,
  autoSubmit,
  className,
  direction,
  errorClassName,
  externalErrors,
  fields,
  labelClassName,
  showLabel,
  submitText,
  submitBtnProps,
  value,
  onCancel,
  onSubmit
}) => {
  const { errors, getValues, register, handleSubmit, setValue, setError } = useForm();
  const form = autoSubmit ? React.createRef() : null;
  const randomNamesMap = {};

  if (!autoComplete) {
    fields.forEach(field => {
      randomNamesMap[field.name] = randomName(field.name);
    });
  }

  const handleFieldChange = (field, selectedValue) => {
    const currentValue = getValues()[field.name];
    setValue(field.name, selectedValue);
    setError(field.name, null);
    if (autoSubmit) {
      if (!field.minStr || getValues()[field.name].length >= field.minStr) {
        form.current.dispatchEvent(new Event('submit'));
      } else if (
        selectedValue.length < field.minStr &&
        currentValue &&
        currentValue.length >= field.minStr
      ) {
        setValue(field.name, '');
        form.current.dispatchEvent(new Event('submit'));
      }
    }
  };

  useEffect(() => {
    fields.forEach(field => {
      register(
        { name: field.name },
        { required: field.required ? 'This is a mandatory field' : null }
      );
      if (value && value[field.name]) {
        setValue(field.name, value[field.name]);
      }
    });
    if (externalErrors.length) {
      setError(externalErrors);
    }
  }, [externalErrors, fields, register, value, setError, setValue]);

  const getFieldValue = (field, values) => {
    if (values && values[field.name]) {
      return field.fieldProps && field.fieldProps.valueProp && !field.fieldProps.isDefaultValueObj
        ? values[field.name][field.fieldProps.valueProp]
        : values[field.name];
    }
    return null;
  };

  return (
    <form
      ref={form}
      className={`d-flex ${
        direction === 'vertical'
          ? 'flex-column'
          : 'flex-row align-items-center justify-content-between'
      } ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      {fields.map(field => {
        return (
          <FormField
            key={field.name}
            label={field.label}
            valueProp={field.valueProp || 'value'}
            value={getFieldValue(field, value)}
            name={!autoComplete ? randomNamesMap[field.name] : field.name}
            fieldProps={field.fieldProps}
            type={field.type}
            error={errors[field.name] && errors[field.name].message}
            className={direction === 'horizontal' ? 'mr-6' : 'mb-2'}
            errorClassName={errorClassName}
            labelClassName={labelClassName}
            showLabel={showLabel}
            onChange={val => handleFieldChange(field, val)}
          />
        );
      })}
      {!autoSubmit ? (
        <div className="row mt-2">
          <div className={onCancel ? 'col-6' : 'col-12'}>
            <Button submit {...submitBtnProps} block color="secondary" inverse>
              {submitText}
            </Button>
          </div>

          {onCancel ? (
            <div className="col-6">
              <Button block color="secondary" outline onClick={onCancel}>
                Cancel
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}
    </form>
  );
};

Object.assign(Form, generateComponentProps(componentData));

export default Form;
