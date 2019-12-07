import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import loadingSpinnerDarkBg from './examples/loading-spinner-dark-bg';
import loadingSpinnerInverse from './examples/loading-spinner-inverse';
import loadingSpinnerOnlyBg from './examples/loading-spinner-only-bg';
import loadingSpinnerPrimary from './examples/loading-spinner-primary';
import loadingSpinnerSecondary from './examples/loading-spinner-secondary';
import properties from './loading-spinners.properties.json';

const examples = [
  loadingSpinnerPrimary,
  loadingSpinnerSecondary,
  loadingSpinnerInverse,
  loadingSpinnerDarkBg,
  loadingSpinnerOnlyBg
];

const LoadingSpinners = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Loading spinners</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="LoadingSpinner"
              example={example}
              options={{ width: 'full' }}
              actions={[
                { text: 'Start spinner', textActive: 'Stop spinner', propName: 'isLoading' }
              ]}
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

export default LoadingSpinners;
