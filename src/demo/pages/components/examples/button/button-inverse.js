const html = `<div className="d-flex flex-column">
  <Button
    inverse
  >
    Continue
  </Button>
  <Button
    color="secondary"
    inverse
  >
    Continue
  </Button>
</div>
`;

const buttonInverse = {
  id: 'inverse',
  name: 'Inverse',
  html,
  multi: true
};

export default buttonInverse;
