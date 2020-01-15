import Card from 'components/card/card';
import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import properties from './carousel.properties.json';
import carouselBasic from './examples/carousel-basic';
import imgSample from './examples/sample_img.jpg';

const examples = [carouselBasic];

const mockElements = Array.from(Array(10)).map((e, i) => (
  <Card color="secondary" imgSrc={imgSample}>
    Element number {i + 1}
  </Card>
));

const Carousels = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Carousels</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="Carousel"
              example={example}
              bindings={{ mockElements }}
              options={{ width: 'full' }}
            />
          ))}
          <DemoPropsTable properties={properties} />
        </div>
        <div className="col-lg-3 .d-none .d-md-block">
          <DemoSectionsMenu examples={examples} apiSections={['Options']} />
        </div>
      </div>
    </div>
  </div>
);

export default Carousels;
