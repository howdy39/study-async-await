Promise.resolve('aaa')
  .then(() => console.log('aaa'))
  .then(() => Promise.reject(new Error('my error')))
  .catch(error => console.log(error))
  .finally(() => console.log('finally')); // finallyは引数を受け取れない
