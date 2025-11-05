<?php

// Day13（2025.11.03）
// 正の整数 N13 が与えられます。
// その 各桁の数字の合計 を求めてください。

function func13($n) {
    $N13 = strval($n).split('').array_map($Number);
    return $N13.array_reduce(($a, $c) => $a + $c);
}

echo(func13(123));

// 惜しい💦
// 正解はコレ↓↓↓

// function func13($n) {
//     // 数字を文字列にして1文字ずつ配列化
//     $N13 = str_split(strval($n));
    
//     // array_reduceで各文字を数値に変換しつつ合計
//     return array_reduce($N13, function($a, $c) {
//         return $a + intval($c);
//     }, 0);
// }

// echo func13(123);

// 【コメント】
// 段々と、JavaScript→PHPの変換が難しくなってきた。
// メソッドはあまりわからないので、メソッドを知る学習としても有効そうな感じがする。
// バックエンドに慣れるなら、間違いなくメソッドや関数は必要になるので、失敗ありきでコツコツ学習していこう

// Day14（2025.11.04）
// 正の整数 N が与えられます。
// この数の 各桁を掛け合わせた結果 を出力してください。

function func14($n) {
    $N14 = str_split(strval($n));
    return array_reduce($N14, function($a, $c) {
        return $a * intval($c);
    }, 1);
}

echo func14(5846);

// 正解👏
// 別解がいくつかあったので記載。

// 1) foreachループ

// function func14_loop($n) {
//     $product = 1;
//     foreach (str_split((string)$n) as $digit) {
//         $product *= (int)$digit;
//     }
//     return $product;
// }

// 2) while + 整数計算(競プロ用)

// function func14_math($n) {
//     $product = 1;
//     while ($n > 0) {
//         $product *= $n % 10;
//         $n = intdiv($n, 10); // 整数除算（PHP7以降）
//     }
//     return $product;
// }

// 3) 再帰関数
// function func14_recursive($n) {
//     if ($n < 10) return $n;
//     return ($n % 10) * func14_recursive(intdiv($n, 10));
// }

// Day15（2025.11.05）
// 整数 N15 が与えられます。
// その各桁の合計を求め、
// その合計が偶数なら "Even", 奇数なら "Odd" と出力してください。

function func15($n) {
    $sum15 = 0;
    while ($n > 0) {
        $sum15 += $n % 10;
        $n = intdiv($n, 10);
    }
    return ($sum15 % 2 === 0) ? $sum15 + ' Even' : $sum15 + ' Odd';
}

echo func15(124);

// 超惜しい💦
// 正解はコレ↓↓↓
// function func15($n) {
//     $sum15 = 0;
//     while ($n > 0) {
//         $sum15 += $n % 10;
//         $n = intdiv($n, 10);
//     }
//     return ($sum15 % 2 === 0) ? $sum15 . ' Even' : $sum15 . ' Odd';
// }

// echo func15(124);
// ↑ 「+」じゃなくて「.」で連結させる！

// 別解はコチラ↓↓↓
// function func15_alt($n) {
//     $digits = str_split($n);
//     $sum = array_sum($digits);
//     return ($sum % 2 === 0) ? $sum . ' Even' : $sum . ' Odd';
// }

// echo func15_alt(124);

// Day16（2025.11.06）配列から偶数だけを取り出せ！
// 整数の配列 arr が与えられます。
// その中から 偶数だけを抽出し、新しい配列として出力してください。