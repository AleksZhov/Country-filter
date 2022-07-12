import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './refs.js';
export function renderCountryList(countries) {
  if (countries.length === 1) {
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
  } else if (countries.length > 1 && countries.length < 11) {
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
  } else if (countries.length >= 11) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}
