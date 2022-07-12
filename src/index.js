import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './js/refs.js';
import { fetchCountries } from './js/fetchCountries';
import { renderCountryList } from './js/renderCountryList';

const DEBOUNCE_DELAY = 300;
let request = '';

refs.iptRef.addEventListener('input', debounce(onInputHandle, DEBOUNCE_DELAY));
refs.countryListContainer.style.listStyle = 'none';

function onInputHandle(evt) {
  request = evt.target.value.trim();
  if (request === '') {
    refs.countryListContainer.innerHTML = '';
    refs.countryContainer.innerHTML = '';
  } else {
    fetchCountries(request)
      .then(countries => {
        renderCountryList(countries);
        console.log(countries);
      })
      .catch(error => {
        console.log(error);
        if (error.message === '404') {
          Notify.failure('Oops, there is no country with that name');
        }
      });
  }
}
