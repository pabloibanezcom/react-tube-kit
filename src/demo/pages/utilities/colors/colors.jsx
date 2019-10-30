import React from 'react';
import SectionsMenu from '../../../components/sections-menu/sections-menu';

const sections = [];

const Colors = () => (
  <div>
    <h1 className="right-line mb-4">Colors</h1>
    <h4 className="font-weight-light">
      Convey meaning through color with a handful of color utility classes. Includes support for
      styling links with hover states, too.
    </h4>
    <div className="row justify-content-end">
      <div className="col-lg-9">Color</div>
      <div className="col-lg-3">
        <SectionsMenu sections={sections} />
      </div>
    </div>
  </div>
);

export default Colors;
