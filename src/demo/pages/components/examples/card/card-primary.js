import imgSample from './sample_img.jpg';

const html = `<div className="width-250">
  <Card
    color="primary"
    imgSrc={imgSample}
  >
    Some info
  </Card>
</div>`;

const cardPrimary = {
  id: 'cardPrimary',
  name: 'Primary',
  html,
  bindings: { imgSample }
};

export default cardPrimary;
