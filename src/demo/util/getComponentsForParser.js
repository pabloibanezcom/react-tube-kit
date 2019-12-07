import {
  Badge,
  BottomMenu,
  Button,
  CollapsibleList,
  ColorLabel,
  ColorSelector,
  CountryLabel,
  Form,
  Header,
  Icon,
  Input,
  Label,
  LayoutWrapper,
  LoadingSpinner,
  Modal,
  Pagination,
  Panel,
  Selector,
  SideNavbar,
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
    case 'BottomMenu':
      return BottomMenu;
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
    case 'Header':
      return Header;
    case 'Form':
      return Form;
    case 'Icon':
      return Icon;
    case 'Input':
      return Input;
    case 'Label':
      return Label;
    case 'LayoutWrapper':
      return LayoutWrapper;
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
    case 'SideNavbar':
      return SideNavbar;
    case 'TabMenu':
      return TabMenu;
    default:
      return null;
  }
};

export default getComponentsForParser;
