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

const formWithInitialValues = {
  id: 'formWithInitialValues',
  name: 'With initial values',
  html,
  formFields,
  formData
};

export default formWithInitialValues;
