// resolveだけ
const promise = new Promise(resolve => {
  // 何らかの処理
  // 処理が正常終了したら resolve を呼ぶ
  console.log('処理中');
  resolve('howdy39');
});

// promise.then(onFulfilled)
promise.then(value => {
  console.log('then', value);
});

console.log('Script終了' + '-'.repeat(20));
