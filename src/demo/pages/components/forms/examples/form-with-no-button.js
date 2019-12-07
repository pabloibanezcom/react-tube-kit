import SelectorLine from '../../../../components/custom-components/selector-line/selector-line';
import lines from './lines.json';
import towns from './towns.json';

const html = `<div style={{width: 500}}>
  <Form
    autoSubmit
    direction="horizontal"
    fields={formFields}
    onSubmit={ handleSubmit }
  />
</div>`;

const formFields = [
  {
    name: 'town',
    label: 'Town',
    type: 'selector',
    fieldProps: {
      options: towns
    }
  },
  {
    name: 'line',
    label: 'Lines',
    type: 'selector',
    fieldProps: {
      options: lines,
      optionClassName: 'p-0',
      custom: SelectorLine,
      customProp: 'line',
      maxOptions: 20
    }
  }
];

const formWithNoButton = {
  id: 'withNoButton',
  name: 'With no button',
  html,
  formFields
};

export default formWithNoButton;
