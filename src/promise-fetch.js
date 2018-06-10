Promise.resolve()
  .then(() => {
    console.log('aaa');
    return fetch('https://api.github.com/orgs/topgate');
  })
  .then(value => console.log('bbb', value.textContent()))
  .then(() => console.log('ccc'));
