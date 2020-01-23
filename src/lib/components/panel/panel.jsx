import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon/icon';

const panel = ({ background, children, className, headerColor, headerIcon, headerText, width }) => (
  <div className={`panel ${className}`}>
    {headerText ? (
      <div className={`panel-header panel-${headerColor}`}>
        <span className="mb-0 mt-0 d-flex align-items-center font-weight-normal">
          {headerIcon ? <Icon name={headerIcon} className="mr-2" /> : null}
          {headerText}
        </span>
      </div>
    ) : null}
    <div className={`panel-content panel-${background}`} style={width ? { width } : null}>
      {children}
    </div>
  </div>
);

panel.defaultProps = {
  background: 'white',
  className: '',
  headerColor: 'primary',
  headerIcon: null,
  headerText: null,
  width: null
};

panel.propTypes = {
  background: PropTypes.oneOf(['white', 'primary', 'secondary']),
  className: PropTypes.string,
  headerColor: PropTypes.oneOf(['primary', 'secondary']),
  headerIcon: PropTypes.string,
  headerText: PropTypes.string,
  width: PropTypes.number
};

export default panel;
