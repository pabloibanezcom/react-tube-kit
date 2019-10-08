import PropTypes from 'prop-types';
import React, { createRef, useEffect, useState } from 'react';
import Icon from '../icon/icon';
import Panel from '../panel/panel';

const TabMenu = ({ activeTab, className, color, panel, tabs, onTabChange }) => {
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
    const MockContent = tabs[currentTab].content;
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
              <a onClick={() => changeTab(i)}>
                <Icon name={icon} />
                <span>{name}</span>
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

TabMenu.defaultProps = {
  activeTab: 0,
  className: null,
  color: 'primary',
  panel: 'white',
  onTabChange: () => {}
};

TabMenu.propTypes = {
  activeTab: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  panel: PropTypes.oneOf(['white', 'primary', 'secondary']),
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      icon: PropTypes.string,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    })
  ).isRequired,
  onTabChange: PropTypes.func
};

export default TabMenu;
