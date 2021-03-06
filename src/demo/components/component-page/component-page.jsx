import React, { Fragment } from 'react';
import Button from '../../../lib/components/button/button';
import DemoElement from '../demo-element/demo-element';
import DemoPropsTable from '../demo-props-table/demo-props-table';
import DemoSectionsMenu from '../demo-sections-menu/demo-sections-menu';

const ComponentPage = ({ componentData, examples }) => {
  const overviewSection = (
    <div name="overview">
      <h2 className="mb-2">Overview</h2>
      <p>{componentData.description}</p>
      <div>
        <span className="font-weight-normal mr-2">Created:</span>
        <Button type="link" color="secondary" to="/releases" hash={componentData.created}>
          {componentData.created}
        </Button>
      </div>
      <div>
        <span className="font-weight-normal mr-2">Last modified:</span>
        <Button type="link" color="secondary" to="/releases" hash={componentData.lastModified}>
          {componentData.lastModified}
        </Button>
      </div>
      <div>
        <span className="font-weight-normal mr-2">Component dependencies:</span>
        {!componentData.dependencies.length ? (
          <span>None</span>
        ) : (
          componentData.dependencies.map(dep => (
            <Button
              key={dep}
              className="mr-1"
              color="secondary"
              inverse
              size="xs"
              uppercase={false}
            >
              {dep}
            </Button>
          ))
        )}
      </div>
      <div>
        <span className="font-weight-normal mr-2">Library dependencies:</span>
        {!componentData.libraryDependencies.length ? (
          <span>None</span>
        ) : (
          componentData.libraryDependencies.map(dep => (
            <Button key={dep.name} outline size="xs" uppercase={false} href={dep.url} newPage>
              {dep.name}
            </Button>
          ))
        )}
      </div>
    </div>
  );

  const examplesSection = (
    <Fragment>
      {examples ? (
        <div name="examples" className="mt-6">
          <h2 className="mb-2">Examples</h2>
          {examples.map(example => (
            <DemoElement key={example.id} component={componentData.component} example={example} />
          ))}
        </div>
      ) : null}
    </Fragment>
  );

  const apiSection = (
    <div name="api" className="mt-6">
      <h2 className="mb-2">API reference</h2>
      <DemoPropsTable componentData={componentData} />
    </div>
  );

  return (
    <div className="row">
      <div className="col-lg-12">
        <h1 className="right-line mb-8">{componentData.name}</h1>
        <div className="row justify-content-end">
          <div className="col-lg-9">
            {overviewSection}
            {examplesSection}
            {apiSection}
          </div>
          <div className="col-lg-3 .d-none .d-md-block">
            <DemoSectionsMenu examples={examples} componentData={componentData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;
