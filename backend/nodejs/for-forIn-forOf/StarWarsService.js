import fetch from 'node-fetch';

const API_URL = 'https://swapi.dev/api';

async function getPeople(page) {
  const response = await fetch(`${API_URL}/people?page=${page}`);
  const people = await response.json();

  return people.results;
}

export { getPeople };