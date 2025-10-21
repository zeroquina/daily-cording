// 初日問題
// 整数 N が与えられるので、1 から N までの合計を計算してください。
// 条件：N=1以上の整数。N≦1000。
const N = 1000;
let sum = 0;
for (let i=1; i<N; i++) sum += i;

console.log(sum);