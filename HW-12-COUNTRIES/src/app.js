import { getCountries } from './services/api';
import listItem from './templates/list-item.hbs';
import countryDescription from './templates/country-description.hbs';
import { pWarning, pNotice } from './utils/pnotify';
import { messages } from './utils/messages';
import { refs } from './utils/refs';

const debounce = require('lodash.debounce');

function insertListItems(items) {
  refs.alertList.insertAdjacentHTML('beforeend', items);
}

function insertCountryDescription(item) {
  refs.foundContry.insertAdjacentHTML('afterbegin', item);
}

function removeListItems() {
  refs.alertList.innerHTML = '';
  refs.foundContry.innerHTML = '';
}

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.target;
  const inputValue = form.value.toLowerCase();
  getCountries(inputValue)
    .then(countries =>
      countries.filter(country =>
        country.name.toLowerCase().includes(inputValue),
      ),
    )
    .then(result => {
      const resultArr = Array.from(result);
      if (resultArr.length === 0) {
        pWarning(messages.info);
      } else if (inputValue.length === 0) {
        removeListItems();
      } else if (resultArr.length === 1) {
        removeListItems();
        insertCountryDescription(countryDescription(result[0]));
      } else if (resultArr.length > 1 && resultArr.length <= 10) {
        removeListItems();
        insertListItems(listItem(result));
      } else {
        removeListItems();
        pNotice(messages.warning);
      }
    })
    .catch(err => console.warn(err));
}

refs.input.addEventListener('input', debounce(searchFormSubmitHandler, 500));
