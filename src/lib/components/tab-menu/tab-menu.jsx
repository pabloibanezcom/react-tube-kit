import React, { createRef, useEffect, useState } from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import getDisplayClass from '../../util/getDisplayClass';
import Icon from '../icon/icon';
import Panel from '../panel/panel';
import componentData from './tab-menu.data.json';

const TabMenu = ({
  activeTab,
  className,
  color,
  content,
  panel,
  tabs,
  showIcon,
  showTitle,
  onTabChange
}) => {
  const [currentTab, setCurrentTab] = useState(
    Number.isInteger(activeTab) ? activeTab : tabs.find(t => t.id === activeTab)
  );
  const [menuElementWidth, setMenuElementWidth] = useState(0);

  const menuHeader = createRef();

  useEffect(() => {
    const buildWidth = () => {
      if (menuHeader.current) {
        setMenuElementWidth(menuHeader.current.clientWidth / tabs.length);
      }
    };

    buildWidth();
    window.addEventListener('resize', buildWidth);
  }, [menuHeader, tabs.length]);

  const renderContent = () => {
    const MockContent = content || tabs[currentTab].content;
    return <MockContent />;
  };

  const changeTab = tab => {
    setCurrentTab(tab);
    onTabChange(tab);
  };

  return (
    <div className={`tab-menu ${className}`}>
      <ul className={`tab-menu__header tab-menu__header-${color}`} ref={menuHeader}>
        {tabs.map(({ icon, name }, i) => {
          return (
            <li key={i} className={`tab-menu__header-item ${i === currentTab ? 'active' : ''}`}>
              <a
                className="d-flex justify-content-center align-items-center"
                onClick={() => changeTab(i)}
              >
                {icon ? <Icon name={icon} className={`${getDisplayClass(showIcon)}`} /> : null}
                <span className={`${getDisplayClass(showTitle)}`}>{name}</span>
              </a>
            </li>
          );
        })}
        <span
          className={`tab-menu__header-indicator ${
            panel !== 'white' ? 'tab-menu__header-indicator-white' : ''
          }`}
          style={{ left: currentTab * menuElementWidth, width: menuElementWidth }}
        />
      </ul>
      <Panel background={panel}>{renderContent()}</Panel>
    </div>
  );
};

Object.assign(TabMenu, generateComponentProps(componentData));

export default TabMenu;
