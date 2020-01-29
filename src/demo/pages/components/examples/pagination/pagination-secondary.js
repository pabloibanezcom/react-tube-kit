const html = `<div className="w-100">
  <Pagination
    color="secondary"
    pagination={mockPagination}
  />
</div>`;

const mockPagination = {
  page: 1,
  pages: 10
};

const paginationSecondary = {
  id: 'secondary',
  name: 'Secondary',
  html,
  bindings: { mockPagination }
};

export default paginationSecondary;
