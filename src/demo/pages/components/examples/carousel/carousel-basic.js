import Card from 'components/card/card';
import React from 'react';
import imgSample from './sample_img.jpg';

const html = `<div className="w-100">
  <Carousel 
    elements={mockElements}
  />
</div>`;

const mockElements = Array.from(Array(10)).map((e, i) => (
  <Card color="secondary" imgSrc={imgSample}>
    Element number {i + 1}
  </Card>
));

const carouselBasic = {
  id: 'carouselBasic',
  name: 'Basic',
  html,
  bindings: { mockElements }
};

export default carouselBasic;
