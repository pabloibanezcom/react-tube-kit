import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import properties from './card.properties.json';
import cardPrimary from './examples/card-primary';
import cardSecondary from './examples/card-secondary';
import cardWhite from './examples/card-white';
import imgSample from './examples/sample_img.jpg';

const examples = [cardWhite, cardPrimary, cardSecondary];

const Cards = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Cards</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="Card"
              example={example}
              bindings={{ imgSample }}
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

export default Cards;
