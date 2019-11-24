// Пару можно создать на основе строки. 
// Для хранения двух значений применим разделитель. 
// Им может выступить любой символ, однако во избежание 
// совпадений с исходными данными лучше взять редко используемое значение.
// Для этого подойдёт так называемая управляющая или escape-последовательность, 
// которая начинается с обратной косой черты. 
// Мы будем использовать специальный символ \0, 
// обозначающий нулевой символ (NUL).
// Функции car и cdr должны получить содержимое 
// строки до и после разделителя соответственно.
// Управляющая последовательность воспринимается интерпретатором
// как одиночный символ, т.е. имеет длину, равную 1.
// Обязательным условием является отсутствие данного символа в строках, 
// которые объединяются в пару.
// Реализуйте и экспортируйте следующие функции в соответствии с алгоритмом выше:
// cons
// car
// cdr
// Пример
// const pair = cons('computer', 'science');   // => computer\0science
// car(pair); // computer
// cdr(pair); // science
// Подсказки
// Для подсчёта длины строки используйте функцию length() из модуля strings.

import length from './strings';

export const cons = (val1, val2) => {
    return val1 + '\0' + val2;
  }

export const car = (pair) => {
    let result = '';
    for (let i = 0; i < length(pair); i++) {
        if (pair[i] !== '\0') {
            result = result + pair[i];
        } else {
            break;
        }
    }
    return result;
}

export const cdr = (pair) => {
    let result = '';
    for (let i = length(pair) - 1; i > 0; i--) {
        if (pair[i] !== '\0') {
            result = pair[i] + result;
        } else {
            break;
        }
    }
    return result
}


// РЕШЕНИЕ УЧИТЕЛЯ

// BEGIN
const separator = '\0';

const getSeparatorPosition = (str) => {
  const iter = (i) => (str[i] === separator ? i : iter(i + 1));

  return iter(0);
};

const getValue = (pair, begin, end) => {
  const iter = (acc, i) => {
    if (i >= end) {
      return acc;
    }
    const newAcc = `${acc}${pair[i]}`;

    return iter(newAcc, i + 1);
  };

  return iter('', begin);
};

export const cons = (a, b) => `${a}${separator}${b}`;
export const car = (pair) => getValue(pair, 0, getSeparatorPosition(pair));
export const cdr = (pair) => getValue(pair, getSeparatorPosition(pair) + 1, length(pair));
// END