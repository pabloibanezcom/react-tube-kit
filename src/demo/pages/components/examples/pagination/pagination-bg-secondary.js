const html = `<div className="w-100">
  <Pagination
    background="secondary"
    pagination={mockPagination}
  />
</div>`;

const mockPagination = {
  page: 1,
  pages: 10
};

const paginationBgSecondary = {
  id: 'backgroundSecondary',
  name: 'Background secondary',
  html,
  bindings: { mockPagination }
};

export default paginationBgSecondary;
