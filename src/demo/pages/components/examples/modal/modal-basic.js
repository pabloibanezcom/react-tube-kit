import React from 'react';

const html = `<Modal
  content={fakeContent}
  isOpen={showModal}
/>`;

const fakeContent = () => (
  <div>
    <span>This is a fake modal content</span>
  </div>
);

const modalBasic = {
  id: 'basic',
  name: 'Basic',
  html,
  bindings: { fakeContent },
  actions: [{ text: 'Show modal', propName: 'showModal', icon: 'play' }]
};

export default modalBasic;
