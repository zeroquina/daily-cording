// 初日問題（2025.10.21）
// 整数 N が与えられるので、1 から N までの合計を計算してください。
// 条件：N=1以上の整数。N≦1000。
const N = 1000;
let sum = 0;
for (let i=1; i<N; i++) sum += i;

console.log(sum);
// 正解はコレ
// const N = 1000;
// let sum = 0;
// for (let i = 1; i <= N; i++) sum += i;

// console.log(sum);
// 【コメント】
// for内の「i<N;」が惜しかった。
// 調べたコードをそのまま数字だけ変えて記述したので、記号もあっているか再確認すべし。

// 初日問題（2025.10.22）
// 1 から N までの偶数の合計
// Nは1以上の整数

const N2 = 10;
let sum2 = 0;

for (let i = 1; i<=N2; i++) {
    if(i % 2 === 0) {
        sum2+= i;
    }    
}

console.log(sum2);