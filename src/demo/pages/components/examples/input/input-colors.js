const html = `<div style={{width: 300}}>
  <Input color="primary" placeholder="Primary text color"className="mb-3" />
  <Input placeholder="Secondary text color" className="mb-3" />
  <Input color="success" placeholder="Success text color" className="mb-3" />
  <Input color="danger" placeholder="Danger text color" className="mb-3" />
  <Input color="warning" placeholder="Warning text color" className="mb-3" />
  <Input color="light" placeholder="Light text color" className="mb-3" />
  <Input color="dark" placeholder="Dark text color" className="mb-3" />
  <Input color="white" placeholder="White text color" className="mb-3" />
</div>`;

const inputColors = {
  id: 'inputColors',
  name: 'Text colors',
  html
};

export default inputColors;
