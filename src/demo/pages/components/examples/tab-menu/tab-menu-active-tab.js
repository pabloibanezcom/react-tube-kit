import { mockTabs } from './mockTabs';

const html = `<div className="w-100">
  <TabMenu
    color="secondary"
    tabs={mockTabs}
    activeTab={2}
  />
</div>`;

const tabMenuActiveTab = {
  id: 'activeTab',
  name: 'With initial active tab',
  html,
  bindings: { mockTabs }
};

export default tabMenuActiveTab;
