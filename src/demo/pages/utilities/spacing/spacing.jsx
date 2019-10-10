import React from 'react';
import CodeHighlight from '../../../components/code-highlight/code-highlight';
import SectionsMenu from '../../../components/sections-menu/sections-menu';

const sections = [];

const examples = `// margin-top: 2rem; (10px)
<div className="mt-2">...</div>

// margin-left: 7rem; (35px)
<div className="ml-7">...</div>

// padding-left: 4rem; (20px) && padding-right: 4rem; (20px)
<div className="px-4">...</div>

// padding-6: 6rem; (30px)
<div className="p-6">...</div>
`;

const Spacing = () => (
  <div>
    <h1 className="right-line mb-4">Spacing</h1>
    <h4 className="font-weight-light">
      React Tube Kit includes a wide range of shorthand responsive margin and padding utility
      classes to modify an element’s appearance. This inherits from Bootstrap spacing.
    </h4>
    <div className="row justify-content-end">
      <div className="col-lg-9">
        <div className="mt-8">
          <h3 className="mb-2">How it works</h3>
          <p>
            Assign responsive-friendly <b className="secondary">margin</b> or{' '}
            <b className="secondary">padding</b> values to an element or a subset of its sides with
            shorthand classes. Includes support for individual properties, all properties, and
            vertical and horizontal properties. Classes are built from a default Sass map ranging
            from <b className="secondary">0rem</b> to <b className="secondary">6rem</b>.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="mb-2">Notation</h3>
          <p>
            Spacing utilities that apply to all breakpoints, from <b className="secondary">xs</b> to{' '}
            <b className="secondary">xl</b>, have no breakpoint abbreviation in them. This is
            because those classes are applied from <b className="secondary">min-width: 0</b> and up,
            and thus are not bound by a media query. The remaining breakpoints, however, do include
            a breakpoint abbreviation.
          </p>
          <p>
            The classes are named using the format{' '}
            <b className="secondary">&#123;property&#125; &#123;sides&#125;-&#123;size&#125;</b> for
            <b className="secondary">xs</b> and{' '}
            <b className="secondary">
              &#123;property&#125; &#123;sides&#125;-&#123;breakpoint&#125;-&#123;size&#125;
            </b>
            for <b className="secondary">sm</b>, <b className="secondary">md</b>,{' '}
            <b className="secondary">lg</b>, and <b className="secondary">xl</b>.
          </p>
          <p>Where property is one of:</p>
          <ul>
            <li>
              <b className="primary">m</b> - for classes that set{' '}
              <b className="secondary">margin</b>
            </li>
            <li>
              <b className="primary">p</b> - for classes that set{' '}
              <b className="secondary">padding</b>
            </li>
          </ul>
          <p>Where sides is one of:</p>
          <ul>
            <li>
              <b className="primary">t</b> - for classes that set{' '}
              <b className="secondary">margin-top</b> or <b className="secondary">padding-top</b>
            </li>
            <li>
              <b className="primary">b</b> - for classes that set{' '}
              <b className="secondary">margin-bottom</b> or{' '}
              <b className="secondary">padding-bottom</b>
            </li>
            <li>
              <b className="primary">l</b> - for classes that set{' '}
              <b className="secondary">margin-left</b>
              or <b className="secondary">padding-left</b>
            </li>
            <li>
              <b className="primary">r</b> - for classes that set{' '}
              <b className="secondary">margin-right</b>
              or <b className="secondary">padding-right</b>
            </li>
            <li>
              <b className="primary">x</b> - for classes that set both{' '}
              <b className="secondary">*-left</b>
              and <b className="secondary">*-right</b>
            </li>
            <li>
              <b className="primary">y</b> - for classes that set both{' '}
              <b className="secondary">*-top</b>
              and <b className="secondary">*-bottom</b>
            </li>
            <li>
              blank - for classes that set a <b className="secondary">margin</b> or{' '}
              <b className="secondary">padding</b> on all 4 sides of the element
            </li>
          </ul>
          <p>Where size is one number from 0 to 10:</p>
          <ul>
            <li>
              <b className="primary">0</b> - for classes that eliminate the{' '}
              <b className="secondary">margin</b> or <b className="secondary">padding</b> by setting
              it to <b className="secondary">0</b>
            </li>
            <li>
              <b className="primary">1</b> - (by default) for classes that set the{' '}
              <b className="secondary">margin</b> or <b className="secondary">padding</b> to{' '}
              <b className="secondary">.5rem</b>
            </li>
            <li>
              <b className="primary">2</b> - for classes that set the{' '}
              <b className="secondary">margin</b> or <b className="secondary">padding</b> to{' '}
              <b className="secondary">1rem</b>
            </li>
            <li>
              <b className="primary">3</b> - for classes that set the{' '}
              <b className="secondary">margin</b> or <b className="secondary">padding</b> to{' '}
              <b className="secondary">1.5rem</b>
            </li>
            <li>...</li>
            <li>
              <b className="primary">10</b> - for classes that set the{' '}
              <b className="secondary">margin</b> or <b className="secondary">padding</b> to{' '}
              <b className="secondary">5rem</b>
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="mb-2">Examples</h3>
          <CodeHighlight mode="jsx">{examples}</CodeHighlight>
        </div>
      </div>
      <div className="col-lg-3">
        <SectionsMenu sections={sections} />
      </div>
    </div>
  </div>
);

export default Spacing;
