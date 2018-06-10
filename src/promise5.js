Promise.resolve()
  .then(() => {
    console.log('aaa');
  })
  .then(() => {
    console.log('bbb');
    return Promise.reject('bbb error');
  })
  .catch(error => {
    console.log('ccc', error);
  });
