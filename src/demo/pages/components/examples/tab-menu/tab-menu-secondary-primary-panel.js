import { mockTabs } from './mockTabs';

const html = `<div className="w-100">
  <TabMenu
    color="secondary"
    panel="primary"
    tabs={mockTabs}
  />
</div>`;

const tabMenuSecondaryPrimaryPanel = {
  id: 'primaryPanelSecondary',
  name: 'Secondary with primary panel',
  html,
  bindings: { mockTabs }
};

export default tabMenuSecondaryPrimaryPanel;
