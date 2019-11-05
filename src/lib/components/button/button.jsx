import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../icon/icon';

const Button = ({
  fontColor,
  backgroundColor,
  block,
  disabled,
  children,
  className,
  icon,
  iconColor,
  inverse,
  hover,
  onClick,
  href,
  newPage,
  outline,
  size,
  color,
  uppercase,
  submit,
  to,
  type
}) => {
  let buttonClasses = '';
  if (type === 'btn') {
    buttonClasses = `${uppercase ? 'btn-uppercase' : ''}  ${inverse ? 'btn-inverse' : ''} ${
      outline ? 'btn-outline' : ''
    } ${block ? 'btn-block' : ''}`;
  }
  const classStr = `${type} ${type}-${size} ${type}-${color} ${
    hover ? `btn-hover-${hover}` : ''
  } ${buttonClasses} ${className}`;
  const style = { color: fontColor, backgroundColor, borderColor: backgroundColor };
  if (to) {
    return (
      <Link to={to} className={classStr} disabled={disabled}>
        {icon ? <Icon name={icon} /> : null}
        {children}
      </Link>
    );
  }
  if (type === 'btn' && !href) {
    return (
      /* eslint-disable-next-line react/button-has-type */
      <button
        type={submit ? 'submit' : 'button'}
        className={classStr}
        disabled={disabled}
        style={style}
        onClick={onClick}
      >
        {icon ? <Icon name={icon} type={iconColor} className={!children ? 'm-0' : null} /> : null}
        {children}
      </button>
    );
  }
  if (type === 'btn' && href) {
    return (
      /* eslint-disable-next-line react/button-has-type */
      <a
        type={submit ? 'submit' : 'button'}
        className={classStr}
        disabled={disabled}
        style={style}
        href={href}
        target={newPage ? '_blank' : null}
      >
        {icon ? <Icon name={icon} type={iconColor} /> : null}
        {children}
      </a>
    );
  }
  if (type === 'link' && !href) {
    return (
      <a className={classStr} onClick={onClick} disabled={disabled}>
        {icon ? <Icon name={icon} type={iconColor} /> : null}
        {children}
      </a>
    );
  }
  return null;
};

Button.defaultProps = {
  fontColor: null,
  backgroundColor: null,
  hover: null,
  block: false,
  disabled: false,
  className: '',
  icon: '',
  iconColor: null,
  inverse: false,
  outline: false,
  size: 'sm',
  color: 'primary',
  uppercase: true,
  href: null,
  newPage: false,
  submit: false,
  to: null,
  type: 'btn',
  onClick: () => {}
};

Button.propTypes = {
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  hover: PropTypes.oneOf(['primary', 'secondary']),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  inverse: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg']),
  color: PropTypes.oneOf(['primary', 'secondary', 'light', 'warning', 'danger', 'transparent']),
  uppercase: PropTypes.bool,
  href: PropTypes.string,
  newPage: PropTypes.bool,
  submit: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(['link', 'btn']),
  onClick: PropTypes.func
};

export default Button;
