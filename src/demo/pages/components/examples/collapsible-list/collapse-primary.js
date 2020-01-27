import bindings from './bindings';

const html = `<div className="w-100">
  <CollapsibleList
    color="primary"
    elements={lines}
    header={FakeHeader}
    content={FakeContent}
  />
</div>`;

const collapsePrimary = {
  id: 'primary',
  name: 'Primary',
  html,
  bindings
};

export default collapsePrimary;
