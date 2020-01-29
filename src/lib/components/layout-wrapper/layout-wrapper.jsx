/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import isSize from '../../util/isSize';
import useWindowSize from '../../util/useWindowSize';
import BottomMenu from '../bottom-menu/bottom-menu';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import SideNavbar from '../side-navbar/side-navbar';
import TopNavbar from '../top-navbar/top-navbar';
import componentData from './layout-wrapper.data.json';

const LayoutWrapper = ({
  bottomMenuEnabled,
  bottomMenuOptions,
  children,
  className,
  currentPage,
  loading,
  sideNavbarAlign,
  sideNavbarEnabled,
  sideNavbarOptions,
  sideNavbarShown,
  sideNavbarSticky,
  sideNavbarStretch,
  topNavbarOptions
}) => {
  const windowSize = useWindowSize();
  const [showSideNavbar, setShowSideNavbar] = useState(isSize(windowSize, sideNavbarShown));
  const [isNavbarSticky, setIsNavbarSticky] = useState(isSize(windowSize, sideNavbarSticky));
  const [isNavbarStretch, setIsNavbarStretch] = useState(isSize(windowSize, sideNavbarStretch));

  useEffect(() => {
    function handleResize() {
      setIsNavbarSticky(isSize(windowSize, sideNavbarSticky));
      setIsNavbarStretch(isSize(windowSize, sideNavbarStretch));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sideNavbarSticky, sideNavbarStretch, windowSize]);

  return (
    <div className={`layout ${className}`}>
      <LoadingSpinner
        loading={loading || !(!showSideNavbar || isNavbarSticky || isNavbarStretch)}
        background="dark"
        noSpinner={!loading && !(!showSideNavbar || isNavbarSticky || isNavbarStretch)}
      />
      <TopNavbar {...topNavbarOptions} onMenuClick={() => setShowSideNavbar(!showSideNavbar)} />
      <div className="layout__main">
        {sideNavbarEnabled ? (
          <SideNavbar
            {...sideNavbarOptions}
            align={sideNavbarAlign}
            currentPage={currentPage}
            shown={showSideNavbar}
            isSticky={isNavbarSticky}
            isStretch={isNavbarStretch}
            onClose={() => setShowSideNavbar(false)}
          />
        ) : null}
        <div
          className={`layout__container layout__container--${sideNavbarAlign} ${
            sideNavbarEnabled && isNavbarStretch && showSideNavbar
              ? `layout__container--stretch-${sideNavbarAlign}`
              : ''
          }`}
        >
          {children}
        </div>
        {bottomMenuEnabled ? <BottomMenu {...bottomMenuOptions} /> : null}
      </div>
    </div>
  );
};

Object.assign(LayoutWrapper, generateComponentProps(componentData));

export default LayoutWrapper;
