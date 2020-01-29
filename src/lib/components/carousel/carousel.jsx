/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import generateComponentProps from '../../util/generateComponentProps';
import componentData from './carousel.data.json';

const defaultSettings = {
  speed: 700,
  slidesToShow: 6,
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

Object.assign(Carousel, generateComponentProps(componentData));

export default Carousel;
