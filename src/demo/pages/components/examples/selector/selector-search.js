import towns from './towns.json';

const html = `<div className="width-200">
  <Selector
    options={towns}
    search
  />
</div>`;

const selectorSearch = {
  id: 'selectorSearch',
  name: 'With search',
  html,
  bindings: { towns }
};

export default selectorSearch;
