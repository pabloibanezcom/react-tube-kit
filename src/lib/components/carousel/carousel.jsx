/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';

const defaultSettings = {
  speed: 700,
  slidesToShow: 5,
  slidesToScroll: 1
};

const Carousel = ({ elements, className, infinite, slidesToShow }) => {
  const buildSettings = () => {
    const buildResponsive = () => {
      return slidesToShow.map(el => {
        return {
          breakpoint: el.breakpoint,
          settings: {
            slidesToShow: el.slidesToShow,
            centerMode: el.slidesToShow === 1,
            centerPadding: el.slidesToShow === 1 ? '60px' : null,
            infinite: el.slidesToShow === 1,
            arrows: !el.slidesToShow === 1
          }
        };
      });
    };

    return { ...defaultSettings, infinite, responsive: buildResponsive() };
  };

  return (
    <div className="carousel">
      <Slider className={className} {...buildSettings()}>
        {elements.map((el, i) => (
          <div key={i}>
            <div className="px-2">{el}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

Carousel.defaultProps = {
  className: '',
  elements: [],
  infinite: false,
  slidesToShow: [
    { breakpoint: 1200, slidesToShow: 4 },
    { breakpoint: 992, slidesToShow: 3 },
    { breakpoint: 768, slidesToShow: 1 }
  ]
};

Carousel.propTypes = {
  className: PropTypes.string,
  elements: PropTypes.array,
  infinite: PropTypes.bool,
  slidesToShow: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({ breakpoint: PropTypes.number, slidesToShow: PropTypes.number })
    )
  ])
};

export default Carousel;
