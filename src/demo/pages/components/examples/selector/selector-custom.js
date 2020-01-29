import CountryLabel from 'components/country-label/country-label';
import towns from './towns.json';

const townsWithCountries = towns.map(t => ({ ...t, code: t.country.code }));

const html = `<div className="width-200">
  <Selector
    options={townsWithCountries}
    custom={CountryLabel}
    customProp="country"
    search
  />
</div>`;

const selectorCustom = {
  id: 'selectorCustom',
  name: 'Custom',
  html,
  bindings: { townsWithCountries, CountryLabel }
};

export default selectorCustom;
