// Создайте функцию isPerfect, которая принимает число и возвращает true, 
// если оно совершенное, и false — в ином случае.

// Совершенное число — положительное целое число, 
// равное сумме его положительных делителей (не считая само число). 
// Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.


const isPerfect = (num) => {
    let result = 1;

    for (let i = 2; i < num; i++) {
      let digit = num / i;

      if ((digit ^ 0) != digit) {
        digit = 0;
      }
  
      result += digit;
    }
  
    if (result === num) {
      return true;
    }
  
    return false;
  };