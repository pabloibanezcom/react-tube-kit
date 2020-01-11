import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';

const paginationComponent = ({
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

paginationComponent.defaultProps = {
  background: 'light',
  className: '',
  color: 'primary',
  pagination: null,
  pageRangeDisplayed: 4,
  size: 'lg',
  onPageChange: () => {}
};

paginationComponent.propTypes = {
  background: PropTypes.oneOf(['light', 'primary', 'secondary']),
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  pagination: PropTypes.shape({
    page: PropTypes.number,
    pages: PropTypes.number
  }),
  pageRangeDisplayed: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'lg']),
  onPageChange: PropTypes.func
};

export default paginationComponent;
