import axios from 'axios';

const API_KEY =
  'live_JVuh0sCju6CYQ8J6ZhHUeLD6ocHXUHBeCNf5hrhaKLZCHG7KdgyBOXfYrSpYlA9t';

axios.defaults.headers.common['x-api-key'] = API_KEY;

// function to extract the required data from the provided url using axios library
export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  return axios.get(url).then(response => response.data);
}

// function to extract the data about a breed according to it`s id; using axios library
export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  console.log(axios.get(url).then(response => response.data));
  return axios.get(url).then(response => response.data);
}
