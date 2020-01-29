const html = `<div className="w-100">
  <Pagination
    background="primary"
    pagination={mockPagination}
  />
</div>`;

const mockPagination = {
  page: 1,
  pages: 10
};

const paginationBgPrimary = {
  id: 'backgroundPrimary',
  name: 'Background primary',
  html,
  bindings: { mockPagination }
};

export default paginationBgPrimary;
