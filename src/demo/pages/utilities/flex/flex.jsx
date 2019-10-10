import React from 'react';
import SectionsMenu from '../../../components/sections-menu/sections-menu';

const sections = [];

const Flex = () => (
  <div>
    <h1 className="right-line mb-4">Flex</h1>
    <h4 className="font-weight-light">
      Get started with React Tube Kit, a collection of components and utils for React.
    </h4>
    <div className="row justify-content-end">
      <div className="col-lg-9">Flex content</div>
      <div className="col-lg-3">
        <SectionsMenu sections={sections} />
      </div>
    </div>
  </div>
);

export default Flex;
