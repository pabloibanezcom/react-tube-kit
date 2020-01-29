import { info } from 'util/notification';
import SelectorLine from '../../../../components/custom-components/selector-line/selector-line';
import lines from './lines.json';
import towns from './towns.json';

const html = `<div style={{width: 250}}>
  <Form
    fields={formFields}
    submitText="Submit form"
    submitBtnProps={{block: true}}
    labelClassName="text-secondary font-weight-normal"
    onSubmit={ handleSubmit }
  />
</div>`;

const formFields = [
  {
    name: 'firstName',
    label: 'First name',
    type: 'input',
    required: true
  },
  {
    name: 'lastName',
    label: 'Last name',
    type: 'input'
  },
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
  },
  {
    name: 'color',
    label: 'Color',
    type: 'colorSelector'
  }
];

const handleSubmit = fData => {
  info(`<div>Form submitted with following data:</div></br><div>${JSON.stringify(fData)}</div>`);
};

const formWithSelectors = {
  id: 'withSelectors',
  name: 'With Selectors',
  html,
  bindings: { formFields, handleSubmit }
};

export default formWithSelectors;
