import React from 'react';

const mockComponentA = () => <div>This is tab A</div>;
const mockComponentB = () => <div>This is tab B</div>;
const mockComponentC = () => <div>This is tab C</div>;
const mockComponentD = () => <div>This is tab D</div>;

const icons = ['town', 'underground', 'lines', 'person'];

export const mockComponentSingle = () => <div>This is single tab content</div>;

export const mockTabs = [
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

export const mockTabsWithIcons = mockTabs.map((tab, i) => {
  return { ...tab, icon: icons[i] };
});
