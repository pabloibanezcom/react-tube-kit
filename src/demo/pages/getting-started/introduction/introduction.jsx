import React from 'react';
import { Link } from 'react-router-dom';
import CodeHighlight from '../../../components/code-highlight/code-highlight';
import SectionsMenu from '../../../components/sections-menu/sections-menu';

const componentCode = `import { Button } from 'react-tube-kit';

<Button 
  text="Continue" 
/>`;

const scssCode = `@import "./_variables-overrides.scss";
@import "~react-tube-kit/dist/scss/main.scss";`;

const sections = ['Installation', 'Styling', 'Components'];

const Introduction = () => (
  <div>
    <h1 className="right-line mb-4">Introduction</h1>
    <h4 className="font-weight-light">
      Get started with React Tube Kit, a collection of components and utils for React.
    </h4>
    <div className="row justify-content-end">
      <div className="col-lg-9">
        <div className="mt-8">
          <h3 className="mb-2">Installation</h3>
          <CodeHighlight mode="shell">npm install react-tube-kit --save</CodeHighlight>
        </div>
        <div className="mt-10">
          <h3 className="mb-2">Styling</h3>
          <p>Styles can be loaded either from minified css file or from scss file.</p>
          <h4 className="mt-6 mb-2">Option A: Loading CSS</h4>
          <p>Add css import to main css/scss in your application (index.css i.e.)</p>
          <CodeHighlight mode="sass">
            @import &quot;~react-tube-kit/dist/css/main.min.css&quot;;
          </CodeHighlight>
          <h4 className="mt-6 mb-2">Option B: Loading SCSS</h4>
          <p>
            Add scss import main scss in your application (index.scss i.e.). This way allows to
            override default scss variables. Create a scss file contaning the variables to override
            and import it just before package main one.
          </p>
          <CodeHighlight className="mb-2" mode="sass">
            {scssCode}
          </CodeHighlight>
          <p>
            To see more details about how to override defaults visit{' '}
            <Link to="theming">theming section</Link> .
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-2">Components</h3>
          <p>Import desired component from package and instantiate it as usual.</p>
          <CodeHighlight className="mb-2" mode="jsx">
            {componentCode}
          </CodeHighlight>
        </div>
      </div>
      <div className="col-lg-3">
        <SectionsMenu sections={sections} />
      </div>
    </div>
  </div>
);

export default Introduction;
