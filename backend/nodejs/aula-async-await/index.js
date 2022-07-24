import fetch from 'node-fetch';

async function main() {
  const user1 = 'guilhermescr';
  const user2 = 'gustavoguanabara';

  const API_URL = 'https://api.github.com';

  const promise = fetch(`${API_URL}/users/${user1}`);
  const promise2 = fetch(`${API_URL}/users/${user2}`);
  const promises = await Promise.all([promise, promise2]);
  const githubUser1 = await promises[0].json();
  const githubUser2 = await promises[1].json();
  console.log(`${githubUser1.login} ID: ${githubUser1.id}`);
  console.log(`${githubUser2.login} ID: ${githubUser2.id}`);

  /*
  fetch(`${API_URL}/users/${user}`).then((response) => {
    return response.json();
  }).then((user) => {
    console.log(user.message);
  });
  */
}

main();