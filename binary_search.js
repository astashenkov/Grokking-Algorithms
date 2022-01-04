// Сhapter №1


'use strict'

function binarySearch(len) {

    if (1 > n || n > len) return 'Ошибка! Загаданное число не входит в указанную последовательность!';

    let arr = [];
    let min = 0,
        max = len,
        guess = 0;

    for (let i=1; i<=len; i++) {
        arr.push(i);
    }

    while (guess !== n) {
        guess = Math.round((min + max) / 2);
        if (guess > n) {
            max = guess;
        }
        if (guess < n) {
            min = guess;
        }
        console.log(`Min = ${min}; Max = ${max}; Guess = ${guess}.`);
    }

    return guess;
}

let n = 46;     // Число, которе будем угадывать.
console.log(binarySearch(100));     // В качестве аргумента передаем длину последовательности в которой будем искать n.
