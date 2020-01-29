import towns from './towns.json';

const html = `<div className="width-200">
  <Selector
    options={towns}
    defaultValue="madrid"
  />
</div>`;

const selectorDefaultValue = {
  id: 'selectorDefaultValue',
  name: 'With default value',
  html,
  bindings: { towns }
};

export default selectorDefaultValue;
