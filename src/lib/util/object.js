export const isObject = obj => {
  return typeof obj === 'object' && !Array.isArray(obj);
};

export const isEmpty = obj => {
  return Object.entries(obj).length === 0 && obj.constructor === Object;
};
