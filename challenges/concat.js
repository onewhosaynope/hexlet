// Реализуйте и экспортируйте по умолчанию каррированую версию функции, 
// которая принимает на вход три строки 
// и возвращает новую строчку составленную из трех входных.
// // исходная версия
// concat('a', 'bc', 'f'); // abcf
// // каррированая версия
// concat('a')('bc')('f'); // abcf

export default (a) => (b) => (c) => a + b + c