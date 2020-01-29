const html = `<div className="w-100">
  <Pagination
    size="sm"
    color="secondary"
    pagination={mockPagination}
  />
</div>`;

const mockPagination = {
  page: 1,
  pages: 10
};

const paginationSmall = {
  id: 'smallSize',
  name: 'Small size',
  html,
  bindings: { mockPagination }
};

export default paginationSmall;
