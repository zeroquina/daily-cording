// Day13（2025.11.03）10:40～10:52 12分
// 正の整数 N13 が与えられます。
// その 各桁の数字の合計 を求めてください。

function func13(n) {
    const N13 = String(n).split('').map(Number);
    return N13.reduce((a, c) => a + c);
}

console.log(func13(123));

// // 正解👏
// 別解が3つあったので、記載しておく。
// 1) ループで地道に足す（基本形）
// function func13(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;     // 下1桁を足す
//     n = Math.floor(n / 10); // 下1桁を切り捨てる
//   }
//   return sum;
// }

// console.log(func13(123)); // 6

// 2) スプレッド構文を使う（モダンJS）
// function func13(n) {
//   return [...String(n)].reduce((a, c) => a + +c, 0);
// }

// console.log(func13(123)); // 6

// 3) 再帰（ちょっと玄人向け）
// function func13(n) {
//   if (n < 10) return n;
//   return (n % 10) + func13(Math.floor(n / 10));
// }

// console.log(func13(123)); // 6

// オススメはスプレッド構文らしい。

// Day14（2025.11.04）
// 正の整数 N が与えられます。
// この数の 各桁を掛け合わせた結果 を出力してください。