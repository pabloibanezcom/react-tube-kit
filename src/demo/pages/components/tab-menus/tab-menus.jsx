import React from 'react';
import { DemoElement, DemoPropsTable, DemoSectionsMenu } from '../../../components';
import tabMenuActiveTab from './examples/tab-menu-active-tab';
import tabMenuPrimary from './examples/tab-menu-primary';
import tabMenuPrimarySecondaryPanel from './examples/tab-menu-primary-secondary-panel';
import tabMenuSecondary from './examples/tab-menu-secondary';
import tabMenuSecondaryPrimaryPanel from './examples/tab-menu-secondary-primary-panel';
import tabMenuWithIcons from './examples/tab-menu-with-icons';
import properties from './tab.properties.json';

const examples = [
  tabMenuPrimary,
  tabMenuSecondary,
  tabMenuPrimarySecondaryPanel,
  tabMenuSecondaryPrimaryPanel,
  tabMenuWithIcons,
  tabMenuActiveTab
];

const mockComponentA = () => <div>This is tab A</div>;
const mockComponentB = () => <div>This is tab B</div>;
const mockComponentC = () => <div>This is tab C</div>;
const mockComponentD = () => <div>This is tab D</div>;

const icons = ['town', 'underground', 'lines', 'person'];

const mockTabs = [
  {
    id: 'tabA',
    name: 'Element A',
    content: mockComponentA
  },
  {
    id: 'tabB',
    name: 'Element B',
    content: mockComponentB
  },
  {
    id: 'tabC',
    name: 'Element C',
    content: mockComponentC
  },
  {
    id: 'tabD',
    name: 'Element D',
    content: mockComponentD
  }
];

const mockTabsWithIcons = mockTabs.map((tab, i) => {
  return { ...tab, icon: icons[i] };
});

const TabMenus = () => (
  <div>
    <h1 className="right-line mb-8">Tab menus</h1>
    <div className="row justify-content-end">
      <div className="col-lg-9">
        {examples.map(example => (
          <DemoElement
            key={example.id}
            component="TabMenu"
            example={example}
            bindings={{ mockTabs, mockTabsWithIcons }}
            options={{ fullWidth: true }}
          />
        ))}
        <DemoPropsTable properties={properties} />
      </div>
      <div className="col-lg-3">
        <DemoSectionsMenu examples={examples} apiSections={['Options', 'Methods']} />
      </div>
    </div>
  </div>
);

export default TabMenus;
