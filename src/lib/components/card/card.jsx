import React from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import getDisplayClass from '../../util/getDisplayClass';
import ImageAction from '../image-action/image-action';
import componentData from './card.data.json';

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

Object.assign(Card, generateComponentProps(componentData));

export default Card;
