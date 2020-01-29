import { mockTabsWithIcons } from './mockTabs';

const html = `<div className="w-100">
  <TabMenu
    color="secondary"
    tabs={mockTabsWithIcons}
  />
</div>`;

const tabMenuWithIcons = {
  id: 'withIcons',
  name: 'With icons',
  html,
  bindings: { mockTabsWithIcons }
};

export default tabMenuWithIcons;
