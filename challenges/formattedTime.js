// Реализуйте и экспортируйте по умолчанию функцию, 
// которая принимает на вход количество минут (прошедших с начала суток) 
// и возвращает строку, являющуюся временем в формате чч:мм.
// Пример:
// formattedTime(5); // 00:05
// formattedTime(15); // 00:15
// formattedTime(60); // 01:00
// formattedTime(67); // 01:07
// formattedTime(175); // 02:55
// formattedTime(600); // 10:00
// formattedTime(754); // 12:34
// Подсказки
// Используйте функцию Math.floor(number) для округления до нижней границы


const formattedTime = (num) => {


    let hours = Math.floor(num/60);
  
    if (hours > 24) {
      while(hours > 24) {
        hours = hours - 24
      }
    }
    
    if (hours < 10) {
      hours = '0' + hours
    }
  
    let minutes = num - hours * 60;
  
    if (minutes > 60) {
      while(minutes > 60) {
        minutes = minutes - 60
      }
    }
  
    if (minutes < 10) {
      minutes = '0' + minutes
    }
  
    return String(hours + ':' + minutes); 
  }
  
  export default formattedTime;