/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from 'prop-types';
import { isObject } from './object';

const generateComponentProps = componentData => {
  const result = {
    propTypes: {},
    defaultProps: {}
  };

  const generatePropsFromObj = obj => {
    Object.keys(obj).forEach(propKey => {
      result.propTypes[propKey] = generatePropType(obj[propKey].type, obj[propKey].isRequired);
      if (typeof obj[propKey].default !== 'undefined') {
        result.defaultProps[propKey] = generateDefaultProp(obj[propKey].default);
      }
    });
  };

  generatePropsFromObj(componentData.properties);
  generatePropsFromObj(componentData.methods);

  return result;
};

const generatePropType = (type, isRequired) => {
  if (isObject(type)) {
    // return applyIsRequired(PropTypes.shape({}), isRequired);
    const objShape = {};
    Object.keys(type).forEach(key => {
      objShape[key] = PropTypes[type[key]];
    });
    const objType = PropTypes.shape(objShape);
    return applyIsRequired(objType, isRequired);
  }
  if (Array.isArray(type)) {
    if (!checkIfNativeType(type[0])) {
      return applyIsRequired(PropTypes.oneOf(type), isRequired);
    }
    return applyIsRequired(PropTypes.oneOfType(type.map(t => PropTypes[t])), isRequired);
  }
  return applyIsRequired(PropTypes[type], isRequired);
};

const applyIsRequired = (propType, isRequired) => {
  return isRequired ? propType.isRequired : propType;
};

const checkIfNativeType = type => {
  return !!PropTypes[type];
};

const generateDefaultProp = defaultProp => {
  if (defaultProp === 'emptyFunc') {
    return () => {};
  }
  return defaultProp;
};

export default generateComponentProps;
