import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorSelector = ({ className, color, onChange }) => {
  const [showColorMenu, setShowColorMenu] = useState(false);
  const [selectedColor, setSelectedColor] = useState(color);

  const handleColorChange = newSelectedColor => {
    setSelectedColor(newSelectedColor);
    onChange(newSelectedColor);
  };

  return (
    <div className={`d-flex align-items-center color-selector ${className}`}>
      {showColorMenu ? (
        <div className="color-selector__overlay" onClick={() => setShowColorMenu(false)} />
      ) : null}
      <div className="color-selector__color-box" onClick={() => setShowColorMenu(true)}>
        <div
          className="color-selector__color-box-inner"
          style={{ backgroundColor: selectedColor }}
        />
        <ChromePicker
          className={`${showColorMenu ? '' : 'hidden'}`}
          disableAlpha
          color={selectedColor || { hex: '#FFFFFF' }}
          onChangeComplete={val => handleColorChange(val.hex)}
        />
      </div>
      {selectedColor || 'Select a color'}
    </div>
  );
};

ColorSelector.defaultProps = {
  className: '',
  color: null,
  onChange: () => {}
};

ColorSelector.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  onChange: PropTypes.func
};

export default ColorSelector;
