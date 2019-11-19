// Реализуйте и экспортируйте по умолчанию функцию partialApply. 
// Эта функция умеет частично применять один (второй) аргумент у переданной функции:
// const pow = (a, b) => a ** b;
// const f1 = partialApply(pow, 2);
// f1(1); // 1
// f1(10); // 100
// const f2 = partialApply((a, b) => a * b, 5);
// f2(2); // 10
// f2(5); // 25

const partialApply = (func, val) => (b) => func(b, val);

const pow = (a, b) => {
    return a ** b;
}
const f1 = partialApply(pow, 2);
console.log(f1(10));
const f2 = partialApply((a, b) => a * b, 5);
console.log(f2(5));
