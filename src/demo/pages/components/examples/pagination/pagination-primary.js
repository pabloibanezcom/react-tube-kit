const html = `<div className="w-100">
  <Pagination
    pagination={mockPagination}
  />
</div>`;

const mockPagination = {
  page: 1,
  pages: 10
};

const paginationPrimary = {
  id: 'primary',
  name: 'Primary',
  html,
  bindings: { mockPagination }
};

export default paginationPrimary;
