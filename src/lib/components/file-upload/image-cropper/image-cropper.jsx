import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageCropper = ({ file }) => {
  const [crop, setCrop] = useState({ aspect: 16 / 9 });

  const handleCropComplete = result => {
    console.log(result);
  };

  return (
    <div>
      <ReactCrop
        src={URL.createObjectURL(file)}
        crop={crop}
        onChange={newCrop => setCrop(newCrop)}
        onComplete={handleCropComplete}
      />
    </div>
  );
};

export default ImageCropper;
