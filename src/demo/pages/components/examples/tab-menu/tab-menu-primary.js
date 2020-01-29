import { mockTabs } from './mockTabs';

const html = `<div className="w-100">
  <TabMenu
    tabs={mockTabs}
  />
</div>`;

const tabMenuPrimary = {
  id: 'primary',
  name: 'Primary',
  html,
  bindings: { mockTabs }
};

export default tabMenuPrimary;
