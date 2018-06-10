Promise.all([
  new Promise(resolve => {
    console.log('aaa');
    resolve();
  }),
  new Promise(resolve => {
    console.log('bbb');
    resolve();
  }),
  new Promise(resolve => {
    console.log('ccc');
    resolve();
  }),
]).then(() => {
  console.log('ddd');
});
