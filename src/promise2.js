// resolveとreject
const promise = new Promise((resolve, reject) => {
  // 何らかの処理
  // 処理が異常終了したら reject を呼ぶ
  console.log('処理中');
  reject(new Error('howdy39'));
});

// promise.then(onFulfilled, onRejected)
promise.then(
  value => {
    console.log('then', value);
  },
  error => {
    console.error('error', error);
  }
);

console.log('Script終了' + '-'.repeat(20));
