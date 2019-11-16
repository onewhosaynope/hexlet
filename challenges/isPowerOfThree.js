// Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, 
// которая определяет, является ли переданное число натуральной степенью тройки. 
// Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.
// Пример:
// isPowerOfThree(1); // true (3^0)
// isPowerOfThree(2); // false
// isPowerOfThree(9); // true (3^2)


const isPowerOfThree = (num) => {
    let i = 0;
    while(power(i) < num+1) {
        if (power(i) === num) {
            return true
        }
        i++;
    }
    return false;
}

const power = (num) => {
    return 3**num;
}

export default isPowerOfThree;