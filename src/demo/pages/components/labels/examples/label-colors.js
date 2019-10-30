const html = `<div className="d-flex flex-column">
  <Label>Label with body color</Label>
  <Label color="primary">Label with primary color</Label>
  <Label color="secondary">Label with secondary color</Label>
  <Label color="success">Label with success color</Label>
  <Label color="danger">Label with danger color</Label>
  <Label color="warning">Label with warning color</Label>
  <Label color="dark">Label with dark color</Label>
  <Label color="muted">Label with muted color</Label>
</div>`;

const labelColors = {
  id: 'colors',
  name: 'Colors',
  html
};

export default labelColors;
