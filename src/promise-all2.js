Promise.all([
  Promise.resolve('aaa'),
  Promise.resolve('bbb'),
  Promise.resolve('ccc'),
]).then(values => {
  const [a, b, c] = values;
  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
});
