import { mockTabs } from './mockTabs';

const html = `<div className="w-100">
  <TabMenu
    panel="secondary"
    tabs={mockTabs}
  />
</div>`;

const tabMenuPrimarySecondaryPanel = {
  id: 'primarySecondaryPanel',
  name: 'Primary with secondary panel',
  html,
  bindings: { mockTabs }
};

export default tabMenuPrimarySecondaryPanel;
