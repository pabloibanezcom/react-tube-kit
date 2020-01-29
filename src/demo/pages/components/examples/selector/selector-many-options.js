import CountryLabel from 'components/country-label/country-label';
import countries from './countries.json';

const html = `<div className="width-200">
  <Selector
    options={countries}
    custom={CountryLabel}
    customProp="country"
    valueProp="_id"
    search
  />
</div>`;

const selectorManyOptions = {
  id: 'selectorManyOptions',
  name: 'Large number of options',
  html,
  bindings: { countries, CountryLabel }
};

export default selectorManyOptions;
