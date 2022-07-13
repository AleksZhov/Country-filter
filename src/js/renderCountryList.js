import refs from './refs.js';

export function renderCountryList(countries) {
  refs.countryContainer.innerHTML = '';
  const markupMultiple = countries
    .map(country => {
      const {
        name: { common },
        flags: { svg },
      } = country;
      return `<li>
      <h2 class="country__heading"><img src="${svg}" width = "40"/>   <b>${common}</b><h2/> 
      </li>`;
    })
    .join('');
  refs.countryListContainer.innerHTML = markupMultiple;
}
