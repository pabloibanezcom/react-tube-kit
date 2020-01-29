const html = `<div className="d-flex flex-column">
  <Button
    type="link"
  >
    Primary link
  </Button>
  <Button
    type="link"
    color="secondary"
  >
  Secondary link
  </Button>
  <Button
    type="link"
    size="lg"
  >
    Large link
  </Button>
</div>
`;

const buttonLink = {
  id: 'link',
  name: 'Link',
  html
};

export default buttonLink;
