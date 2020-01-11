import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import formBasic from './examples/form-basic';
import formHorizontal from './examples/form-horizontal';
import formWithInitialValues from './examples/form-with-initial-values';
import formWithNoButton from './examples/form-with-no-button';
import formWithSelectors from './examples/form-with-selectors';
import properties from './form.properties.json';

const examples = [
  formBasic,
  formWithSelectors,
  formWithInitialValues,
  formHorizontal,
  formWithNoButton
];

const handleSubmit = formData => {
  console.log(formData);
};

const Forms = () => (
  <div className="row">
    <div className="col-lg-12">
      <h1 className="right-line mb-8">Forms</h1>
      <div className="row justify-content-end">
        <div className="col-lg-9">
          {examples.map(example => (
            <DemoElement
              key={example.id}
              component="Form"
              example={example}
              options={{ flexColumn: true, width: 'full' }}
              bindings={{
                formFields: example.formFields,
                formData: example.formData,
                handleSubmit
              }}
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

export default Forms;
