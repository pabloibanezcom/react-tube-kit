import bindings from './bindings';

const html = `<div className="w-100">
  <CollapsibleList
    color="secondary"
    elements={lines}
    header={FakeHeader}
    content={FakeContent}
  />
</div>`;

const collapseSecondary = {
  id: 'secondary',
  name: 'Secondary',
  html,
  bindings
};

export default collapseSecondary;
