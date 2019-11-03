const html = `<Selector
  options={townsWithCountries}
  custom={CountryLabel}
  customProp="country"
  search
/>`;

const selectorCustom = {
  id: 'selectorCustom',
  name: 'Custom',
  html
};

export default selectorCustom;
