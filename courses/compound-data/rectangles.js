// Реализуйте абстракцию (набор функций) для работы с прямоугольником, 
// стороны которого всегда параллельны осям. 
// Прямоугольник может располагаться в любом месте координатной плоскости.
// При такой постановке задачи достаточно знать только 
// три параметра для однозначного задания прямоугольника на плоскости: 
// координаты левой-верхней точки, ширину и высоту. 
// Зная их, мы всегда можем построить прямоугольник одним единственным способом.

//       |
//     4 |    точка   ширина
//       |       *-------------
//     3 |       |            |
//       |       |            | высота
//     2 |       |            |
//       |       --------------
//     1 |
//       |
// ------|---------------------------
//     0 |  1   2   3   4   5   6   7
//       |
//       |
//       |

// Основной интерфейс:
// makeRectangle (конструктор) - создаёт прямоугольник. 
// Принимает параметры: левую-верхнюю точку, ширину и высоту.
// Селекторы getStartPoint, getWidth и getHeight
// Вспомогательные функции для выполнения расчетов:
// square - возвращает площадь прямоугольника (a * b).
// perimeter - возвращает периметр прямоугольника (2 * (a + b)).
// containsTheOrigin - проверяет, 
// принадлежит ли центр координат прямоугольнику 
// (не лежит на границе прямоугольника, а находится внутри). 
// Чтобы в этом убедиться, достаточно проверить, 
// что все вершины прямоугольника лежат в разных квадрантах 
// (их можно вычислить в момент проверки).
// Так как это интерфейсные функции, то они должны быть экспортированы. 
// Если этого не сделать, система модулей js не даст ими воспользоваться.
// // Создание прямоугольника:
// // p - левая верхняя точка
// // 5 - ширина
// // 4 - высота
// //
// // p    5
// // -----------
// // |         |
// // |         | 4
// // |         |
// // -----------
// const p = makePoint(0, 1);
// const rectangle = makeRectangle(p, 5, 4);
// // Вычисление площади прямоугольника
// square(rectangle); // 20;
// perimeter(rectangle); // 18
// containsTheOrigin(rectangle); // false
// const rectangle02 = makeRectangle(makePoint(-4, 3), 5, 4);
// containsTheOrigin(rectangle02); // true
// containsTheOrigin(makeRectangle(makePoint(-4, 4), 5, 2)); // false
// containsTheOrigin(makeRectangle(makePoint(-4, 3), 2, 8)); // false



// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from '@hexlet/points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs';

export const makeRectangle  = (startPoint, width, height) => {
  let endPoint = makePoint(getX(startPoint) + width, getY(startPoint) + height);
  return cons(startPoint, endPoint);
}

export const getStartPoint = (rectangle) => {
  return car(rectangle);
}

export const getEndPoint = (rectangle) => {
  return cdr(rectangle);
}

export const getWidth = (rectangle) => {
  let end_x = getX(cdr(rectangle));
  let start_x = getX(car(rectangle));
  return end_x - start_x;
}

export const getHeight = (rectangle) => {
  let end_y = getY(cdr(rectangle));
  let start_y = getY(car(rectangle));
  return end_y - start_y;
}

export const square = (rectangle) => {
  return getHeight(rectangle) * getWidth(rectangle);
}

export const perimeter = (rectangle) => {
  return 2 * (getHeight(rectangle) + getWidth(rectangle))
}

export const containsTheOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makePoint(getX(point1) + getWidth(rectangle), getY(point1) - getHeight(rectangle));
  const point3 = makePoint(getX(point1), getY(point1) - getHeight(rectangle));
  const point4 = makePoint(getX(point1) + getWidth(rectangle), getY(point1));
  return quadrant(point1) === 2 && quadrant(point2) === 4 && quadrant(point3) === 3 && quadrant(point4) === 1;
};