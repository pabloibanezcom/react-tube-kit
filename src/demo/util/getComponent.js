import components from '../components.json';

export const getComponentFromUrl = url => {
  return components.find(c => c.url === url);
};

export const getComponentFromName = name => {
  return components.find(c => c.name === name);
};

export const getComponentFromComponentName = componentName => {
  return components.find(c => c.component === componentName);
};
