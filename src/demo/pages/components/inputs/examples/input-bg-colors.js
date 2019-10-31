const html = `<div style={{width: 300}}>
  <Input placeholder="Primary background color"className="mb-3" />
  <Input bgColor="secondary" placeholder="Secondary background color" className="mb-3" />
  <Input bgColor="success" placeholder="Success background color" className="mb-3" />
  <Input bgColor="danger" placeholder="Danger background color" className="mb-3" />
  <Input bgColor="warning" placeholder="Warning background color" className="mb-3" />
  <Input bgColor="light" placeholder="Light background color" className="mb-3" />
  <Input bgColor="dark" placeholder="Dark background color" className="mb-3" />
  <Input bgColor="white" placeholder="White background color" className="mb-3" />
</div>`;

const inputBgColors = {
  id: 'inputBgColors',
  name: 'Background colors',
  html
};

export default inputBgColors;
