// Promise オブジェクトの生成
const promise = new Promise((resolve, reject) => {
  const random = Math.random();

  // 50%でエラー
  if (random > 0.5) {
    reject(new Error('エラーが発生1！'));
    reject(new Error('エラーが発生2！')); // 2つ目は無意味
  }

  resolve('成功1！'); // rejectが呼ばれたあとにresolveを呼んでも正常終了にはならない
});

promise
  .then(value => {
    console.log('then', value);
  })
  .catch(value => {
    console.log('catch', value);
  });

console.log('Script終了' + '-'.repeat(20));
