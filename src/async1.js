const fetch = require('node-fetch');

async function showGitHubOrganizationReposCount(name) {
  const res = await fetch(`https://api.github.com/orgs/${name}`);
  const org = await res.json();
  console.log(org);
}

showGitHubOrganizationReposCount('topgate');
