const html = `<Selector
  options={lines}
  optionClassName="p-0"
  custom={SelectorLine}
  customProp="line"
  maxOptions={20}
/>`;

const selectorOptionCustomClass = {
  id: 'selectorOptionCustomClass',
  name: 'Option custom class',
  html
};

export default selectorOptionCustomClass;
