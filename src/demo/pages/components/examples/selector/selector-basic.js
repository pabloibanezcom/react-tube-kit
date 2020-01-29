import towns from './towns.json';

const html = `<div className="width-200">
  <Selector
    options={towns}
  />
</div>`;

const selectorBasic = {
  id: 'selectorBasic',
  name: 'Basic',
  html,
  bindings: { towns }
};

export default selectorBasic;
