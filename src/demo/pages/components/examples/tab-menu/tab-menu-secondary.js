import { mockTabs } from './mockTabs';

const html = `<div className="w-100">
  <TabMenu
    color="secondary"
    tabs={mockTabs}
  />
</div>`;

const tabMenuSecondary = {
  id: 'secondary',
  name: 'Secondary',
  html,
  bindings: { mockTabs }
};

export default tabMenuSecondary;
