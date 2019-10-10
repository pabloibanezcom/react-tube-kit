import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import paginationBgPrimary from './examples/pagination-bg-primary';
import paginationBgSecondary from './examples/pagination-bg-secondary';
import paginationCustomPagesNumber from './examples/pagination-custom-pages-number';
import paginationPrimary from './examples/pagination-primary';
import paginationSecondary from './examples/pagination-secondary';
import paginationSmall from './examples/pagination-small';
import properties from './paginations.properties.json';

const examples = [
  paginationPrimary,
  paginationSecondary,
  paginationBgPrimary,
  paginationBgSecondary,
  paginationCustomPagesNumber,
  paginationSmall
];

const mockPagination = {
  page: 1,
  pages: 10
};

const Paginations = () => (
  <div>
    <h1 className="right-line mb-8">Paginations</h1>
    <div className="row justify-content-end">
      <div className="col-lg-9">
        {examples.map(example => (
          <DemoElement
            key={example.id}
            component="Pagination"
            example={example}
            bindings={{ mockPagination }}
            options={{ fullWidth: true }}
          />
        ))}
        <DemoPropsTable properties={properties} />
      </div>
      <div className="col-lg-3">
        <DemoSectionsMenu examples={examples} apiSections={['Options', 'Methods']} />
      </div>
    </div>
  </div>
);

export default Paginations;
