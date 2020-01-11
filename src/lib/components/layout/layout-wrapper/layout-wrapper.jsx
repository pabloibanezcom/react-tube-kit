import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import isSize from '../../../util/isSize';
import useWindowSize from '../../../util/useWindowSize';
import LoadingSpinner from '../../loading-spinner/loading-spinner';
import BottomMenu from '../bottom-menu/bottom-menu';
import Header from '../header/header';
import SideNavbar from '../side-navbar/side-navbar';

const LayoutWrapper = ({
  children,
  className,
  currentPage,
  // loading-spinner
  loading,
  // header
  headerAnimated,
  headerClassName,
  headerLogo,
  headerMenuButtonDisplay,
  headerRightContent,
  headerSubtitle,
  headerTitle,
  headerTitleDisplay,
  // sidenavbar
  sideNavbarAlign,
  sideNavbarClassName,
  sideNavbarElements,
  sideNavbarEnabled,
  sideNavbarShown,
  sideNavbarSticky,
  sideNavbarStretch,
  // bottomMenu
  bottomMenuClassName,
  bottomMenuDisplay,
  bottomMenuElements,
  bottomMenuEnabled,
  bottomMenuScrollHide
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
      <Header
        animated={headerAnimated}
        className={headerClassName}
        logo={headerLogo}
        menuButtonDisplay={headerMenuButtonDisplay}
        rightContent={headerRightContent}
        subtitle={headerSubtitle}
        title={headerTitle}
        titleDisplay={headerTitleDisplay}
        onMenuClick={() => setShowSideNavbar(!showSideNavbar)}
      />
      <div className="layout__main">
        {sideNavbarEnabled ? (
          <SideNavbar
            align={sideNavbarAlign}
            className={sideNavbarClassName}
            currentPage={currentPage}
            elements={sideNavbarElements}
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
        {bottomMenuEnabled ? (
          <BottomMenu
            className={bottomMenuClassName}
            elements={bottomMenuElements}
            display={bottomMenuDisplay}
            scrollHide={bottomMenuScrollHide}
          />
        ) : null}
        {/* <div
          className={`layout__overlay ${
            !showSideNavbar || isNavbarSticky || isNavbarStretch ? 'layout__overlay--hidden' : ''
          }`}
        /> */}
      </div>
    </div>
  );
};

LayoutWrapper.defaultProps = {
  className: '',
  currentPage: null,
  // loading-spinner
  loading: false,
  // header
  headerAnimated: false,
  headerClassName: '',
  headerLogo: null,
  headerMenuButtonDisplay: '-md',
  headerRightContent: null,
  headerSubtitle: null,
  headerTitle: null,
  headerTitleDisplay: 'md-',
  // sidenavbar
  sideNavbarAlign: 'left',
  sideNavbarClassName: '',
  sideNavbarElements: [],
  sideNavbarEnabled: true,
  sideNavbarShown: 'md-',
  sideNavbarSticky: false,
  sideNavbarStretch: 'md-',
  // bottomMenu
  bottomMenuClassName: '',
  bottomMenuDisplay: '-md',
  bottomMenuElements: [],
  bottomMenuEnabled: true,
  bottomMenuScrollHide: false
};

LayoutWrapper.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.string,
  // loading-spinner
  loading: PropTypes.bool,
  // header
  headerAnimated: PropTypes.bool,
  headerClassName: PropTypes.string,
  headerLogo: PropTypes.node,
  headerMenuButtonDisplay: PropTypes.string,
  headerRightContent: PropTypes.element,
  headerSubtitle: PropTypes.string,
  headerTitle: PropTypes.string,
  headerTitleDisplay: PropTypes.string,
  // sidenavbar
  sideNavbarAlign: PropTypes.oneOf(['left', 'right']),
  sideNavbarClassName: PropTypes.string,
  sideNavbarElements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  sideNavbarEnabled: PropTypes.bool,
  sideNavbarShown: PropTypes.string,
  sideNavbarSticky: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  sideNavbarStretch: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  // bottomMenu
  bottomMenuClassName: PropTypes.string,
  bottomMenuDisplay: PropTypes.string,
  bottomMenuElements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  bottomMenuEnabled: PropTypes.bool,
  bottomMenuScrollHide: PropTypes.bool
};

export default LayoutWrapper;
