import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { renderSingleCountry } from './renderSingleCountry.js';
import { renderCountryList } from './renderCountryList.js';

export function renderCurrentMarkup(countries) {
  if (countries.length === 1) {
    renderSingleCountry(countries);
  } else if (countries.length > 1 && countries.length < 11) {
    renderCountryList(countries);
  } else if (countries.length >= 11) {
    Notify.info('Too many matches found. Please enter a more specific name.');
  }
}
