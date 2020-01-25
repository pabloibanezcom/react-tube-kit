import React from 'react';
import { info } from 'util/notification';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import imageActionBasic from './examples/image-action-basic';
import imgSample from './examples/sample_img.jpg';
import properties from './image-action.properties.json';

const examples = [imageActionBasic];

const handleOnClick = () => {
  info('Image action clicked!');
};

const Buttons = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Image action</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="ImageAction"
              example={example}
              bindings={{ imgSample, handleOnClick }}
              options={{ width: '300' }}
            />
          ))}
          <DemoPropsTable properties={properties} />
        </div>
        <div className="col-lg-3 .d-none .d-md-block">
          <DemoSectionsMenu examples={examples} apiSections={['Options', 'Methods']} />
        </div>
      </div>
    </div>
  </div>
);

export default Buttons;
