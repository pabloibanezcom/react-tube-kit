import bindings from './bindings';

const html = `<div className="w-100">
  <CollapsibleList
    elements={lines}
    header={FakeHeader}
    content={FakeContent}
  />
</div>`;

const collapsePlain = {
  id: 'plain',
  name: 'Plain',
  html,
  bindings
};

export default collapsePlain;
