// Напишите и экспортируйте функции car и cdr, 
// основываясь на реализации функции cons:
// const cons = (x, y) => f => f(x, y);
// При таком определении как выше, пара будет 
// представлять из себя функцию f => f(x, y). Например:
// const pair = cons(5, 3);
// // const pair = f => f(5, 3);
// Теперь догадаться до решения не так уж и сложно. 
// По сути car и cdr должны вызвать внутри себя pair 
// (ведь это функция, не забыли?), и передать туда функцию, 
// которая в зависимости от ситуации вернет либо первый, 
// либо второй аргумент.
// Подсказки
// Все дело в хитрых функциях, 
// которые вызывают другие функции и передают в них функции ;)
// Задача проще, чем кажется. 
// Каждая функция — это одна короткая строчка.

export const cons = (x, y) => (f) => f(x, y);

export const car = (z) => z((x) => x); // second arg unused here
export const cdr = (z) => z((x, y) => y);
