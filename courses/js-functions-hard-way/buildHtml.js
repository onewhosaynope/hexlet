// Модуль tags содержит набор функций, позволяющих генерировать HTML с помощью функций.
// table(
//   tr(td('one'), td('two')),
//   tr(td('three'), td('four'))
// );
// В результате вызовов возвращается вот такой HTML:
// <table>
//   <tr>
//     <td>one</td>
//     <td>two</td>
//   </tr>
//   <tr>
//     <td>three</td>
//     <td>four</td>
//   </tr>
// </table>
// Реализуйте и экспортируйте по умолчанию функцию buildHtml, простой вызов которой:
// buildHtml();
// создаёт и возвращает следующий HTML:
// <table>
//   <tr>
//     <td>lang</td>
//     <td>comment</td>
//   </tr>
//   <tr>
//     <td>php</td>
//     <td>statements</td>
//   </tr>
//   <tr>
//     <td>clojure</td>
//     <td>expressions</td>
//   </tr>
// </table>



import { table, tr, td } from './tags';

export default () => {
  return table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions'))
  );
}

// tags.js
export const table = (...children) => `<table>${children.join('')}</table>`;
export const tr = (...children) => `<tr>${children.join('')}</tr>`;
export const td = (...children) => `<td>${children.join('')}</td>`;
export const p = (...children) => `<p>${children.join('')}</p>`;
