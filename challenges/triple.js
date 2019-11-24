// Кроме пар можно создавать абстрактные типы данных, 
// которые содержат внутри себя три и более элемента.
// В данном испытании необходимо реализовать структуру данных тройка, 
// позволяющую хранить три значения. 
// Как и в случае с парами создаётся конструктор make и 
// селекторы get1, get2, get3, которые будут извлекать соответствующие значения.
// Реализуйте и экспортируйте следующие функции:
// make
// get1
// get2
// get3
// Пример
// const triple = make(3, 5, 'I am element from triple');
// get1(triple); // 3
// get2(triple); // 5
// get3(triple); // I am element from triple



/* eslint default-case: 0, consistent-return: 0 */

export const make = (x, y, z) => (f) => f(x, y, z);

export const get1 = (f) => f((x) => x); // second arg unused here
export const get2 = (f) => f((x, y) => y);
export const get3 = (f) => f((x, y, z) => z)
