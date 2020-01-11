const html = `<Selector
  options={towns}
  nullOption={{ value: null, name: 'All towns' }}
/>`;

const selectorNullOption = {
  id: 'selectorNullOption',
  name: 'With null option',
  html
};

export default selectorNullOption;
