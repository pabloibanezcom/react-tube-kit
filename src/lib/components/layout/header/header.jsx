import React from 'react';

const header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__title">
          <div className="header__left">
            <span className="header__logo animated zoomInDown animation-delay-5">T</span>
            <h1 className="animated fadeInRight animation-delay-6">
              Tube History<span> Map</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
