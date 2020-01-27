import imgSample from './sample_img.jpg';

const html = `<div className="width-250">
  <Card
    color="secondary"
    imgSrc={imgSample}
  >
    Some info
  </Card>
</div>`;

const cardSecondary = {
  id: 'cardSecondary',
  name: 'Secondary',
  html,
  bindings: { imgSample }
};

export default cardSecondary;
