import PropTypes from 'prop-types';
import React from 'react';
import getDisplayClass from '../../util/getDisplayClass';
import Button from '../button/button';

const Card = ({ children, className, color, imgButtonText, imgSrc, showImage, onImageClick }) => (
  <div className={`card ${className}`}>
    {imgSrc ? (
      <div className={`card__image-wrapper ${getDisplayClass(showImage)}`}>
        {imgButtonText ? (
          <div className="card__image-wrapper__zoom">
            <div className="card__image-wrapper__zoom__link-wrapper d-flex justify-content-center align-items-center">
              <Button
                id="card-button"
                className="w-100 h-100 p-0 font-weight-bold"
                color="transparent"
                onClick={onImageClick}
              >
                {imgButtonText}
              </Button>
            </div>
            <div className="card__image-wrapper__zoom__overlay" />
            <img src={imgSrc} alt="cardImage" />
          </div>
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
