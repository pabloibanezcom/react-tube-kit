const html = `<Selector
  options={countries}
  custom={CountryLabel}
  customProp="country"
  valueProp="_id"
  search
/>`;

const selectorManyOptions = {
  id: 'selectorManyOptions',
  name: 'Large number of options',
  html
};

export default selectorManyOptions;
