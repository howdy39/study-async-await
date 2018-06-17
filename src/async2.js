const fetch = require('node-fetch');

(async () => {
  try {
    const response = await fetch('https://api.github.com/orgs/topgate');
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (err) {
    throw err;
  }
})();
