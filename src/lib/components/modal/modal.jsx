import React, { useEffect, useState } from 'react';
import { default as ReactModal } from 'react-modal';
import generateComponentProps from '../../util/generateComponentProps';
import Button from '../button/button';
import componentData from './modal.data.json';

const Modal = ({ className, content, isOpen, onClose }) => {
  const [isShown, setIsShown] = useState(isOpen);
  const Content = content;

  useEffect(() => {
    setIsShown(isOpen);
  }, [isOpen]);

  const handleOnClose = () => {
    setIsShown(false);
    onClose();
  };

  return (
    <div>
      <ReactModal
        className={`m0dal animated zoomIn faster ${className}`}
        overlayClassName="m0dal__overlay"
        isOpen={isShown}
        ariaHideApp={false}
      >
        {<Content />}
        <Button
          type="link"
          text=""
          icon="close"
          color="secondary"
          className="close-button"
          onClick={handleOnClose}
        />
      </ReactModal>
    </div>
  );
};

Object.assign(Modal, generateComponentProps(componentData));

export default Modal;
