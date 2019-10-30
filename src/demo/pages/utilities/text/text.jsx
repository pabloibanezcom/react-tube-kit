import React from 'react';
import SectionsMenu from '../../../components/sections-menu/sections-menu';

const sections = [];

const Text = () => (
  <div>
    <h1 className="right-line mb-4">Text</h1>
    <h4 className="font-weight-light">
      Documentation and examples for common text utilities to control alignment, wrapping, weight,
      and more.
    </h4>
    <div className="row justify-content-end">
      <div className="col-lg-9">Font weight</div>
      <div className="col-lg-3">
        <SectionsMenu sections={sections} />
      </div>
    </div>
  </div>
);

export default Text;
