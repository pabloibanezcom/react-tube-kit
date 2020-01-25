import PropTypes from 'prop-types';
import React from 'react';
import getDisplayClass from '../../util/getDisplayClass';
import ImageAction from '../image-action/image-action';

const Card = ({ children, className, color, imgButtonText, imgSrc, showImage, onImageClick }) => (
  <div className={`card ${className}`}>
    {imgSrc ? (
      <div className={`card__image-wrapper ${getDisplayClass(showImage)}`}>
        {imgButtonText ? (
          <ImageAction actionText={imgButtonText} src={imgSrc} onClick={onImageClick} />
        ) : (
          <img src={imgSrc} alt="cardImage" />
        )}
      </div>
    ) : null}
    <div className={`card__content card__content--${color}`}>{children}</div>
  </div>
);

Card.defaultProps = {
  className: '',
  color: 'white',
  imgButtonText: null,
  imgSrc: null,
  showImage: 'xs-',
  onImageClick: () => {}
};

Card.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['white', 'primary', 'secondary']),
  imgButtonText: PropTypes.string,
  imgSrc: PropTypes.string,
  showImage: PropTypes.string,
  onImageClick: PropTypes.func
};

export default Card;
