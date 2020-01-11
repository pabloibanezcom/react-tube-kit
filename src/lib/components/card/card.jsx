import PropTypes from 'prop-types';
import React from 'react';
import getDisplayClass from '../../util/getDisplayClass';

const Card = ({ children, className, color, imgSrc, showImage }) => (
  <div className={`card ${className}`}>
    {imgSrc ? (
      <div className={`card__image-wrapper ${getDisplayClass(showImage)}`}>
        <img src={imgSrc} alt="cardImage" />
      </div>
    ) : null}
    <div className={`card__content card__content--${color}`}>{children}</div>
  </div>
);

Card.defaultProps = {
  className: '',
  color: 'white',
  imgSrc: null,
  showImage: 'xs-'
};

Card.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['white', 'primary', 'secondary']),
  imgSrc: PropTypes.string,
  showImage: PropTypes.string
};

export default Card;
