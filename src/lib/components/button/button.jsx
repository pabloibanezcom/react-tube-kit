import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../icon/icon';

const Button = ({
  ariaExpanded,
  ariaHaspopup,
  fontColor,
  backgroundColor,
  block,
  dataToggle,
  disabled,
  children,
  className,
  icon,
  iconColor,
  id,
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
  textAlignment,
  to,
  type
}) => {
  let buttonClasses = '';
  if (type === 'btn') {
    buttonClasses = `${uppercase ? 'btn-uppercase' : ''}  ${inverse ? 'btn-inverse' : ''} ${
      outline ? 'btn-outline' : ''
    } ${block ? 'btn-block' : ''}`;
  }

  const _textAlginment = textAlignment || (type === 'btn' ? 'center' : 'left');

  const classStr = `${type} ${type}--${size} ${type}-${color} text-${_textAlginment} ${
    hover ? `btn-hover-${hover}` : ''
  } ${buttonClasses} ${className}`;
  const style = { color: fontColor, backgroundColor, borderColor: backgroundColor };

  const content = (
    <>
      {icon ? (
        <div className={`d-flex justify-content-${_textAlginment} align-items-center`}>
          <Icon
            name={icon}
            type={iconColor}
            className={`${!children ? 'm-0' : ''} ${type === 'link' ? 'mr-2' : ''}`}
          />
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );

  if (to) {
    return (
      <Link id={id} to={to} className={classStr} disabled={disabled}>
        {content}
      </Link>
    );
  }
  if (type === 'btn' && !href) {
    return (
      /* eslint-disable-next-line react/button-has-type */
      <button
        id={id}
        type={submit ? 'submit' : 'button'}
        className={classStr}
        disabled={disabled}
        style={style}
        data-toggle={dataToggle}
        aria-haspopup={ariaHaspopup}
        aria-expanded={ariaExpanded}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }
  if (type === 'btn' && href) {
    return (
      /* eslint-disable-next-line react/button-has-type */
      <a
        id={id}
        type={submit ? 'submit' : 'button'}
        className={classStr}
        disabled={disabled}
        style={style}
        href={href}
        target={newPage ? '_blank' : null}
      >
        {content}
      </a>
    );
  }
  if (type === 'link' && !href) {
    return (
      <a id={id} className={classStr} onClick={onClick} disabled={disabled}>
        {content}
      </a>
    );
  }
  return null;
};

Button.defaultProps = {
  ariaExpanded: null,
  ariaHaspopup: null,
  fontColor: null,
  backgroundColor: null,
  hover: null,
  block: false,
  dataToggle: null,
  disabled: false,
  className: '',
  icon: '',
  iconColor: null,
  id: null,
  inverse: false,
  outline: false,
  size: 'md',
  color: 'primary',
  uppercase: true,
  href: null,
  newPage: false,
  submit: false,
  textAlignment: null,
  to: null,
  type: 'btn',
  onClick: () => {}
};

Button.propTypes = {
  ariaExpanded: PropTypes.bool,
  ariaHaspopup: PropTypes.bool,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  hover: PropTypes.oneOf(['primary', 'secondary']),
  block: PropTypes.bool,
  dataToggle: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  inverse: PropTypes.bool,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  id: PropTypes.string,
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'primary-alt',
    'secondary-alt',
    'light',
    'warning',
    'danger',
    'transparent'
  ]),
  uppercase: PropTypes.bool,
  href: PropTypes.string,
  newPage: PropTypes.bool,
  submit: PropTypes.bool,
  textAlignment: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['link', 'btn']),
  onClick: PropTypes.func
};

export default Button;
