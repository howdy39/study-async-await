// resolveとreject
const promise = new Promise((resolve, reject) => {
  // 何らかの処理
  // 処理が異常終了したら reject を呼ぶ
  console.log('処理中');
  reject(new Error('howdy39'));
});

// promise.catch(onRejected)
promise.catch(error => {
  console.error('catch', error);
});

console.log('Script終了' + '-'.repeat(20));
