import { info } from 'util/notification';

const html = `<div style={{width: 600}}>
  <Form
    direction="horizontal"
    fields={formFields}
    submitText="Submit"
    onSubmit={ handleSubmit }
  />
</div>`;

const formFields = [
  {
    name: 'firstName',
    label: 'First name',
    type: 'input'
  },
  {
    name: 'lastName',
    label: 'Last name',
    type: 'input'
  },
  {
    name: 'age',
    label: 'Age',
    type: 'input'
  }
];

const handleSubmit = fData => {
  info(`<div>Form submitted with following data:</div></br><div>${JSON.stringify(fData)}</div>`);
};

const formHorizontal = {
  id: 'horizontal',
  name: 'Horizontal',
  html,
  bindings: { formFields, handleSubmit }
};

export default formHorizontal;
