import { info } from 'util/notification';
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
      className: 'width-250',
      options: towns
    }
  },
  {
    name: 'line',
    label: 'Lines',
    type: 'selector',

    fieldProps: {
      className: 'width-250',
      options: lines,
      optionClassName: 'p-0',
      custom: SelectorLine,
      customProp: 'line',
      maxOptions: 20
    }
  }
];

const handleSubmit = fData => {
  info(`<div>Form submitted with following data:</div></br><div>${JSON.stringify(fData)}</div>`);
};

const formWithNoButton = {
  id: 'withNoButton',
  name: 'With no button',
  html,
  bindings: { formFields, handleSubmit }
};

export default formWithNoButton;
