import towns from './towns.json';

const html = `<div className="width-200">
  <Selector
    options={towns}
    nullOption={{ value: null, name: 'All towns' }}
  />
</div>`;

const selectorNullOption = {
  id: 'selectorNullOption',
  name: 'With null option',
  html,
  bindings: { towns }
};

export default selectorNullOption;
