const html = `<div className="d-flex flex-column">
  <div><Badge outline className="mb-3">Badge with primary background color</Badge></div>
  <div><Badge outline className="mb-3" type="secondary">Badge with secondary background color</Badge></div>
  <div><Badge outline className="mb-3" type="success">Badge with success background color</Badge></div>
  <div><Badge outline className="mb-3" type="danger">Badge with danger background color</Badge></div>
  <div><Badge outline className="mb-3" type="warning">Badge with warning background color</Badge></div>
  <div><Badge outline className="mb-3" type="light">Badge with warning background color</Badge></div>
  <div><Badge outline className="mb-3" type="dark">Badge with warning background color</Badge></div>
</div>`;

const badgeOutline = {
  id: 'badgeOutline',
  name: 'Outline',
  html
};

export default badgeOutline;
