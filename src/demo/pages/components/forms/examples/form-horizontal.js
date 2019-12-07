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

const formHorizontal = {
  id: 'horizontal',
  name: 'Horizontal',
  html,
  formFields
};

export default formHorizontal;
