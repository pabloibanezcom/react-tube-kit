import React from 'react';
import generateComponentProps from '../../util/generateComponentProps';
import Button from '../button/button';
import componentData from './image-action.data.json';

const ImageAction = ({ actionText, alt, className, id, src, style, onClick }) => {
  return (
    <div id={id} className={`image-action ${className}`} style={style}>
      <div className="image-action__link-wrapper d-flex justify-content-center align-items-center">
        <Button
          id="card-button"
          className="w-100 h-100 p-0 font-weight-bold"
          color="transparent"
          onClick={onClick}
        >
          {actionText}
        </Button>
      </div>
      <div className="image-action__overlay" />
      <img className="w-100" src={src} alt={alt} />
    </div>
  );
};

Object.assign(ImageAction, generateComponentProps(componentData));

export default ImageAction;
