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