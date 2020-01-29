import {
  Badge,
  BottomMenu,
  Button,
  Card,
  Carousel,
  CollapsibleList,
  ColorLabel,
  ColorSelector,
  CountryLabel,
  Dropdown,
  FileUpload,
  Form,
  Icon,
  ImageAction,
  Input,
  Label,
  LayoutWrapper,
  LoadingSpinner,
  Map,
  Modal,
  Pagination,
  Panel,
  Selector,
  SideNavbar,
  TabMenu,
  TopNavbar
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
    case 'Card':
      return Card;
    case 'Carousel':
      return Carousel;
    case 'CollapsibleList':
      return CollapsibleList;
    case 'CountryLabel':
      return CountryLabel;
    case 'ColorLabel':
      return ColorLabel;
    case 'ColorSelector':
      return ColorSelector;
    case 'Dropdown':
      return Dropdown;
    case 'FileUpload':
      return FileUpload;
    case 'Form':
      return Form;
    case 'Icon':
      return Icon;
    case 'ImageAction':
      return ImageAction;
    case 'Input':
      return Input;
    case 'Label':
      return Label;
    case 'LayoutWrapper':
      return LayoutWrapper;
    case 'LoadingSpinner':
      return LoadingSpinner;
    case 'Map':
      return Map;
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
    case 'TopNavbar':
      return TopNavbar;
    default:
      return null;
  }
};

export default getComponentsForParser;
