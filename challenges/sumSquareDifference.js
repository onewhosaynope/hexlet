// Сумма квадратов первых десяти натуральных чисел 
// это 12 + 22 + 32 + ... + 10 2 = 385.

// Квадрат суммы первых десяти натуральных чисел 
// это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

// Разница между квадратом суммы 
// и суммой квадратов первых десяти натуральных чисел: 
// 3025 − 385 = 2640.

// Напишите функцию sumSquareDifference, которая принимает аргумент n 
// и возвращает разницу между квадратом суммы 
// и суммой квадратов первых n натуральных чисел.



const sumSquareDifference = (n) => {

    return square(sum(n)) - sum_of_square(n);

}

const square = (n) => {
    return n*n;
} 

const sum = (n) => {
    let result = n;

    for(let i = 1; i < n; i++) {
        result = result + i;
    }

    return result;
}

const sum_of_square = (n) => {
    let result = square(n);

    for(let i = 1; i<n; i++) {
        result = result + square(i);
    }

    return result;
}