import {
  Badge,
  Button,
  CollapsibleList,
  ColorLabel,
  ColorSelector,
  CountryLabel,
  Icon,
  Input,
  Label,
  LoadingSpinner,
  Modal,
  Pagination,
  Panel,
  Selector,
  TabMenu
} from '../../lib';

const getComponentsForParser = componentsString => {
  const componentNames = componentsString.split(' ');
  const result = {};
  componentNames.forEach(name => {
    result[name] = getComponentFromName(name);
  });
  return result;
};

const getComponentFromName = componentName => {
  switch (componentName) {
    case 'Badge':
      return Badge;
    case 'Button':
      return Button;
    case 'CollapsibleList':
      return CollapsibleList;
    case 'CountryLabel':
      return CountryLabel;
    case 'ColorLabel':
      return ColorLabel;
    case 'ColorSelector':
      return ColorSelector;
    case 'Icon':
      return Icon;
    case 'Input':
      return Input;
    case 'Label':
      return Label;
    case 'LoadingSpinner':
      return LoadingSpinner;
    case 'Modal':
      return Modal;
    case 'Pagination':
      return Pagination;
    case 'Panel':
      return Panel;
    case 'Selector':
      return Selector;
    case 'TabMenu':
      return TabMenu;
    default:
      return null;
  }
};

export default getComponentsForParser;
