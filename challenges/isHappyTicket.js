// "Счастливым" называют билет с номером, 
// в котором сумма первой половины цифр равна сумме второй половины цифр. 
// Номера могут быть произвольной длины, с единственным условием, 
// что количество цифр всегда чётно, например: 33 или 2341 и так далее.

// Билет с номером 385916 — счастливый, так как 3 + 8 + 5 = 9 + 1 + 6. 
// Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 != 0 + 0 + 2.
// isHappyTicket.js

// Реализуйте и экспортируйте по умолчанию функцию isHappy, 
// проверяющую является ли номер счастливым (номер — всегда строка). 
// Функция должна возвращать true, если билет счастливый, или false, если нет.
// Примеры использования:
// isHappyTicket('385916'); // true
// isHappyTicket('231002'); // false
// isHappyTicket('1222');   // false
// isHappyTicket('054702'); // true
// isHappyTicket('00');     // true
// Подсказки
// Чтобы узнать длину строки, используйте свойство length:
// 'welcome'.length; // 7


const sumDigits = (numberString) => {
    let sum = 0;
    for (let i = 0; i < numberString.length; i += 1) {
      sum += Number(numberString[i]);
    }
    return sum;
  };
  
const isHappyTicket = (number) => {
    const numberString = String(number);
    console.log("num: " + numberString)
    console.log(numberString.length)
    const leftPart = numberString.substr(0, (numberString.length)/2);
    console.log("lf: " + leftPart);
    const rightPart = numberString.substr((numberString.length)/2, numberString.length);
    console.log("rp: " + rightPart);

    return sumDigits(leftPart) === sumDigits(rightPart);
  };

export default isHappyTicket;