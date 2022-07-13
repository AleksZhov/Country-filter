import refs from './refs.js';
export function renderSingleCountry(countries) {
  refs.countryListContainer.innerHTML = '';
  const markupSingle = countries.map(country => {
    const languages = Object.values(country.languages);
    const {
      name: { official },
      capital,
      population,
      flags: { svg },
    } = country;
    return `
      <h1><img src="${svg}" width = "80"/>   <b>${official}</b></h1>
        <p> <b>Capital:  </b>${capital}
        </p>
        <p>
          <b>Population:  </b>${population}
        </p>
        <p>
          <b>Languages:  </b>${languages}
        </p>
      `;
  });
  refs.countryContainer.innerHTML = markupSingle;
}
