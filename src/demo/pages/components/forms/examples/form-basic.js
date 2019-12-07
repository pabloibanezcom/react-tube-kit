const html = `<div style={{width: 250}}>
  <Form
    fields={formFields}
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

const formBasic = {
  id: 'basic',
  name: 'Basic',
  html,
  formFields
};

export default formBasic;
