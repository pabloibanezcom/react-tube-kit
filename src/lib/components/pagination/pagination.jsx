import React from 'react';
import ReactPaginate from 'react-paginate';
import generateComponentProps from '../../util/generateComponentProps';
import componentData from './pagination.data.json';

const Pagination = ({
  background,
  className,
  color,
  pagination,
  pageRangeDisplayed,
  size,
  onPageChange
}) => {
  const handlePageChange = evt => {
    onPageChange(evt.selected + 1);
  };

  return (
    <div className={`pagination-container pagination-container-${background} ${className}`}>
      <nav className="navigation" aria-label="Page navigation">
        {pagination ? (
          <ReactPaginate
            pageCount={pagination.pages}
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={1}
            forcePage={pagination.page - 1}
            onPageChange={handlePageChange}
            containerClassName={`pagination pagination-round pagination-plain ${
              background === 'light' ? `pagination-${color}` : ''
            } pagination-bg-${background} ${size !== 'lg' ? `pagination-${size}` : ''}`}
            pageClassName="page-item"
            previousClassName="page-item"
            nextClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            previousLabel="«"
            nextLabel="»"
          />
        ) : null}
      </nav>
    </div>
  );
};

Object.assign(Pagination, generateComponentProps(componentData));

export default Pagination;
