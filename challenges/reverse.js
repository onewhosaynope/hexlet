// Реализуйте и экспортируйте функцию по умолчанию, 
// которая переворачивает строку задом наперед, используя рекурсию.
// Например:
// import reverse from './reverse';
// reverse('str');    // rts
// reverse('hexlet'); // telxeh
// Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод substr.
// Подсказки
// Чтобы узнать длину строки, используйте свойство length:
// 'welcome'.length; // 7
// Чтобы получить подстроку из строки, используйте метод substr:
// 'foo'.substr(1, 2); // 'oo';


const reverse = (word) => {
    let result = '';
    for(let i = word.length - 1; i > -1; i--) {
      result = result + word[i];
    }
    return result;
  }
  
  export default reverse;