import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Button from '../button/button';

const CustomModal = ({ content, isOpen, onClose }) => {
  const [isShown, setIsShown] = useState(isOpen);
  const Content = content;

  console.log(content, isOpen, onClose);

  useEffect(() => {
    setIsShown(isOpen);
  }, [isOpen]);

  return (
    <div>
      <Modal
        className="m0dal animated zoomIn faster"
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
          onClick={onClose}
        />
      </Modal>
    </div>
  );
};

export default CustomModal;
