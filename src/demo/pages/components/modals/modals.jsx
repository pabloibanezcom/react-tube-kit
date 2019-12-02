import React from 'react';
import { DemoElement, DemoSectionsMenu } from '../../../components';
import modalBasic from './examples/modal-basic';

const examples = [modalBasic];

const fakeContent = () => (
  <div>
    <span>This is a fake modal content</span>
  </div>
);

const fakeFunction = () => {
  console.log('This is a fake function');
};

const Modals = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Modals</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="Modal"
              example={example}
              bindings={{ fakeContent, fakeFunction }}
              actions={[{ text: 'Show modal', icon: 'play', propName: 'showModal' }]}
            />
          ))}
        </div>
        <div className="col-lg-3 .d-none .d-md-block">
          <DemoSectionsMenu examples={examples} apiSections={['Options', 'Methods']} />
        </div>
      </div>
    </div>
  </div>
);

export default Modals;
