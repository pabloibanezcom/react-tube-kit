import { info } from 'util/notification';

const html = `<div style={{width: 250}}>
  <Form
    fields={formFields}
    value={formData}
    submitText="Submit basic form"
    submitBtnProps={{block: true}}
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

const formData = {
  firstName: 'Peter',
  lastName: 'Jones',
  age: 35
};

const handleSubmit = fData => {
  info(`<div>Form submitted with following data:</div></br><div>${JSON.stringify(fData)}</div>`);
};

const formWithInitialValues = {
  id: 'formWithInitialValues',
  name: 'With initial values',
  html,
  bindings: { formFields, formData, handleSubmit }
};

export default formWithInitialValues;
