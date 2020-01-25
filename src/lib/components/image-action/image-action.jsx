import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button';

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

export default ImageAction;

ImageAction.defaultProps = {
  actionText: '',
  alt: '',
  className: '',
  id: null,
  src: null,
  style: null,
  onClick: () => {}
};

ImageAction.propTypes = {
  actionText: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};
