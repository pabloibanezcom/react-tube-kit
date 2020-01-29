const html = `<div className="w-100">
  <Pagination
    pageRangeDisplayed={2}
    pagination={mockPagination}
  />
</div>`;

const mockPagination = {
  page: 1,
  pages: 10
};

const paginationCustomPagesNumber = {
  id: 'customPagesNumber',
  name: 'Custom pages number',
  html,
  bindings: { mockPagination }
};

export default paginationCustomPagesNumber;
