import imgSample from './sample_img.jpg';

const html = `<div className="width-250">
  <Card
    imgSrc={imgSample}
  >
    Some info
  </Card>
</div>`;

const cardWhite = {
  id: 'cardWhite',
  name: 'White',
  html,
  bindings: { imgSample }
};

export default cardWhite;
