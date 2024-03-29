// В JS у строк есть метод substr. В этом задании мы его реализуем самостоятельно. 
// Просьба не использовать этот метод внутри вашей реализации.
// Реализуйте и экспортируйте по умолчанию функцию substr, 
// которая возвращает подстроку из переданной строки. 
// Подстрокой называется любая выбранная часть строки. 
// Например для строки hello можно выделить следующие подстроки: 
// ello, llo, o, el и множество других. 
// Функция принимает на вход три параметра:
// Строка.
// Начальный индекс. Значение по умолчанию: 0.
// Длина подстроки (количество символов). Значение по умолчанию: длина всей строки.
// substr('abba', 0, 1);    // a
// substr('abba', 1, 2);    // bb
// substr('abba', -10, 2);  // ab
// substr('abba', -1, 100); // abba
// substr('abba', -1, -1);  // a
// substr('abba', 1, -10);  // b
// substr('abba', 1, 10);   // bba
// substr('abba', 1, 0);    // ''
// substr('abba', 100, 3);  // ''
// По умолчанию, то есть если не переданы дополнительные параметры, 
// возвращается сама строка:
// substr('');     // ''
// substr('abba'); // abba
// У этой функции множество вариантов поведения:
// Если переданная длина отрицательная, то внутри она становится единицей
// Если переданная длина равна нулю, то возвращается пустая строка
// Если конечный индекс (начальный индекс + переданная длина - 1) выходит за границу строки, 
// то берётся подстрока от начального индекса до конца строки.
// substr('abba', 1, 10); // bba
// Конечный индекс 1 + 10. Он выходит за границу строки, 
// так как длина строки 4 символа. Поэтому возвращается подстрока, 
// от начального индекса 1 и до конца строки.
// Если начальный индекс отрицательный, то внутри он становится нулем
// Если начальный индекс выходит за границу слова справа, то всегда возвращается пустая строка
// Для реализации этой функции, используйте подход, который называется "нормализация". 
// Он заключается в том, что перед тем как делать вычисления, данные приводятся к виду, 
// с которым удобно работать. Например, длина строки для substr может иметь следующие 
// неудобные значения:
// Отрицательное число
// Число, выходящее за границу строки
// "Индекс + Длина" выходят за границу строки
// В каждой из этих ситуаций длину строки можно изменить на такое значение, 
// которое будет удобно для обработки сразу всех возможных случаев. 
// Если число отрицательное, то длина становится равной единице (из условия), 
// если оно выходит за границу строки, то его нужно сделать равным длине строки. 
// В последнем случае длина должна стать числом "Длина - Индекс". 
// После этих манипуляций процесс взятия подстроки становится универсальным и 
// не содержащим условия.
// Подсказки
// Длина строки str находится так: str.length
// 'cat'.length; // 3


// const substr = (word, begin = 1, end = word.length) => {

//     if (end - begin === 0) {
//       return '';
//     }
//     if (end > word.length - 1) {
//       end = word.length - 1;
//     }
//     if (begin < 0) {
//       begin = 0;
//     }
//     if (begin > end) {
//       return '';
//     }
  
//     let result = '';
//     for (let i = begin; i < end + 1; i++) {
//       result = result + word[i];
//     }
//     return result;
// }

export default (str, index = 0, substrLength = str.length) => {
  if (index >= str.length) { // если начальный индекс выходит за границу слова справа,
    return ''; // то возвращаем пустую строку
  }

  // В учительском решении нормализация сводится к подготовке всего двух переменных:
  // currentIndex и lastIndex — они формируют диапазон,
  // из которого будет складываться итоговая подстрока.

  // определяем, где находится первый элемент (его позиция в str)
  // формируемой подстроки
  const currentIndex = index < 0 ? 0 : index;

  // определяем, где находится последний элемент (его позиция в str)
  // формируемой подстроки
  let lastIndex = currentIndex + (substrLength - 1);

  if (substrLength < 0) { // обрабатываем ситуацию, когда substrLength отрицателен
    lastIndex = currentIndex;
  } else if (lastIndex > str.length - 1) { // если конечный индекс выходит за границу строки,
    lastIndex = str.length - 1; // то считаем, что он равен индексу последнего элемента в str
  }

  // генерируем подстроку result,
  // "вырезая" её из исходной строки str
  let result = '';
  for (let i = currentIndex; i <= lastIndex; i += 1) {
    result = `${result}${str[i]}`;
  }

  return result;
};

export default substr;
