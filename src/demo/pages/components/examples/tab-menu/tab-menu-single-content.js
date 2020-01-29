import { mockComponentSingle, mockTabs } from './mockTabs';

const html = `<div className="w-100">
  <TabMenu
    tabs={mockTabs}
    content={mockComponentSingle}
  />
</div>`;

const tabMenuSingleContent = {
  id: 'singleContent',
  name: 'Single Content',
  html,
  bindings: { mockTabs, mockComponentSingle }
};

export default tabMenuSingleContent;
