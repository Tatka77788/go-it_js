const URL = 'https://restcountries.eu/rest/v2/';

const getCountries = searchQuery =>
  fetch(URL).then(response => response.json());

export { getCountries };
