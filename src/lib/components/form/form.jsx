/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import useForm from 'react-hook-form';
import randomName from '../../util/randomName';
import Button from '../button/button';
import FormField from './form-field/form-field';

const Form = ({
  autoComplete,
  autoSubmit,
  className,
  direction,
  errorClassName,
  fields,
  labelClassName,
  submitText,
  submitBtnProps,
  onSubmit
}) => {
  const { errors, register, handleSubmit, setValue, setError } = useForm();
  const form = autoSubmit ? React.createRef() : null;
  const randomNamesMap = {};

  if (!autoComplete) {
    fields.forEach(field => {
      randomNamesMap[field.name] = randomName(field.name);
    });
  }

  const handleFieldChange = (field, selectedValue) => {
    setValue(field.name, selectedValue);
    setError(field.name, null);
    if (autoSubmit) {
      form.current.dispatchEvent(new Event('submit'));
    }
  };

  useEffect(() => {
    fields.forEach(field => {
      register(
        { name: field.name },
        { required: field.required ? 'This is a mandatory field' : null }
      );
    });
  }, [fields, register]);

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
      {fields.map(field => (
        <FormField
          key={field.name}
          label={field.label}
          name={!autoComplete ? randomNamesMap[field.name] : field.name}
          fieldProps={field.fieldProps}
          type={field.type}
          error={errors[field.name] && errors[field.name].message}
          className={direction === 'horizontal' ? 'mr-6' : 'mb-2'}
          errorClassName={errorClassName}
          labelClassName={labelClassName}
          onChange={value => handleFieldChange(field, value)}
        />
      ))}
      {!autoSubmit ? (
        <div>
          <Button submit {...submitBtnProps}>
            {submitText}
          </Button>
        </div>
      ) : null}
    </form>
  );
};

Form.defaultProps = {
  autoComplete: false,
  autoSubmit: false,
  className: '',
  direction: 'vertical',
  errorClassName: 'text-danger font-weight-normal',
  fields: [],
  labelClassName: 'font-weight-normal',
  submitText: 'Submit',
  submitBtnProps: {}
};

Form.propTypes = {
  autoComplete: PropTypes.bool,
  autoSubmit: PropTypes.bool,
  className: PropTypes.string,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  errorClassName: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.oneOf(['input', 'selector', 'colorSelector'])
    })
  ),
  labelClassName: PropTypes.string,
  submitText: PropTypes.string,
  submitBtnProps: PropTypes.any,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
