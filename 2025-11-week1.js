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

// Day14（2025.11.04）15:48～16:08 20分
// 正の整数 N が与えられます。
// この数の 各桁を掛け合わせた結果 を出力してください。

function func14(n) {
    return [...String(n)].reduce((a, c) => a * c, 1);
}

console.log(func14(123));

// 正解👏
// 別解もいくつか提示されているので記載。

// 1) ループ版
// function func14_loop(n) {
//   let prod = 1;
//   for (const ch of String(n)) {
//     prod *= Number(ch);
//     if (prod === 0) return 0; // 早期終了（任意）
//   }
//   return prod;
// }
// console.log(func14_loop(123));

// 2) while + 整数計算(競プロ用)
// function func14_math(n) {
//   let product = 1;
//   while (n > 0) {
//     product *= n % 10;     // 下1桁
//     n = Math.floor(n / 10); // 1桁落とす
//   }
//   return product;
// }

// ※ Math.floor の代わりに parseInt() でもOK。

// 3) 再起関数
// function func14_recursive(n) {
//   if (n < 10) return n; // 1桁ならそれ自体
//   return (n % 10) * func14_recursive(Math.floor(n / 10));
// }

// 【コメント】
// 今回は昨日の関数をちょっと小細工したらできたから正解した。
// GPTは色んな別解を教えてくれるから、覚えてなくても徐々に
// 蓄積していっていつか覚醒すると思うから、その時まで踏ん張ろうと思う。

// Day15（2025.11.05）16:40 ～ 17:07
// 整数 N15 が与えられます。
// その各桁の合計を求め、
// その合計が偶数なら "Even", 奇数なら "Odd" と出力してください。

function func15(n) {
    let sum15 = 0;
    while (n > 0) {
        sum15 += n % 10;
        n = Math.floor(n / 10);
    }
    return (sum15 % 2 === 0) ? sum15 + ' Even' : sum15 + ' Odd';
}

console.log(func15(124));

// 正解👏
// 別解はコチラ↓↓↓
// function func15_alt(n) {
//     const sum = [...String(n)].reduce((a, c) => a + Number(c), 0);
//     return (sum % 2 === 0) ? `${sum} Even` : `${sum} Odd`;
// }

// console.log(func15_alt(124));

// Day16（2025.11.06）配列から偶数だけを取り出せ！8:00～8:10
// 整数の配列 arr が与えられます。
// その中から 偶数だけを抽出し、新しい配列として出力してください。
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const N16 = arr.filter(value => value % 2 === 0);

// console.log(N16);

// // 正解👏
// 短縮版の別解もあるので記載。
// console.log([1,2,3,4,5,6,7,8,9,10].filter(x => !(x % 2)));

// Day17（2025.11.07）：合計値を求めよう 9:00 ～ 9:05
// 1 から 100 までの整数をすべて足し合わせた合計を求めてください。

const N16 = 100
let sum16 = 0;

for(i = 1; i<=N16; i++) {
    sum16+= i;
}

console.log(sum16);

// // 正解👏
// 短縮版の別解もあるので記載。
// 1) 数学的アプローチ
// const arr = Array.from({ length: 100 }, (_, i) => i + 1);
// const sum = arr.reduce((a, c) => a + c, 0);

// console.log(sum); // 5050

// 2) filter & reduce
// const sumEven = Array.from({ length: 100 }, (_, i) => i + 1)
//   .filter(n => n % 2 === 0)
//   .reduce((a, c) => a + c, 0);

// console.log(sumEven);

// Day18（2025.11.08）：倍数の合計値 8:20 ～ 8:25(別解8:25 ～ )
// 1 から N = 100 までの整数のうち、
// 「3の倍数または5の倍数」の合計を求めてください。
// 【ループ】
const N17 = 100;
let sum17 = 0;

for(let i = 1; i <= N17; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum17 += i;
    }
}
console.log(sum17);

// 【別解（array() & filter()）】
const ant17_01 = Array.from({ length: 100 }, (_, i) => i + 1 ).filter(n => n % 3 === 0 || n % 5 === 0).reduce((a, c) => a + c, 0);
console.log(ant17_01);

// 全部正解👏
// 数式版の回答もあったので記載↓↓↓
// function sumMultiples(N, m) {
//   const k = Math.floor(N / m);
//   return m * k * (k + 1) / 2;
// }
// const N = 100;
// const total = sumMultiples(N, 3) + sumMultiples(N, 5) - sumMultiples(N, 15);
// console.log(total); // 2418

// Day19（2025.11.09）
// 1 から N までの整数のうち、
// 「各桁の数字の合計が偶数」になるものの個数を求めてください。