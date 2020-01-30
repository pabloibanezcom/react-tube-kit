import React from 'react';
import { Link } from 'react-router-dom';
import generateComponentProps from '../../util/generateComponentProps';
import Icon from '../icon/icon';
import componentData from './button.data.json';

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
      <button
        id={id}
        type={submit ? 'submit' : 'button'}
        className={classStr}
        disabled={disabled}
        style={style}
        href={href}
        target={newPage ? '_blank' : null}
      >
        {content}
      </button>
    );
  }
  if (type === 'link' && !href) {
    return (
      <a id={id} className={classStr} onClick={onClick} disabled={disabled}>
        {content}
      </a>
    );
  }
  if (type === 'link' && href) {
    return (
      <a
        id={id}
        className={classStr}
        onClick={onClick}
        disabled={disabled}
        href={href}
        target={newPage ? '_blank' : null}
      >
        {content}
      </a>
    );
  }
  return null;
};

Object.assign(Button, generateComponentProps(componentData));

export default Button;
