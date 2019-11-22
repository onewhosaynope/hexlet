// Реализуйте и экспортируйте следующие функции для работы с точками:

// getQuadrant — функция, которая вычисляет квадрант, 
// в котором находится точка. 
// Ниже приведена схема, показывающая номера квадрантов на плоскости.

//            +
//          2 | 1
//            |
//    +----------------+
//            |
//          3 | 4
//            +

// const point = makePoint(1, 5);
// getQuadrant(point); // 1
// getQuadrant(makePoint(3, -3)); // 4
// Если точка не принадлежит ни одному квадранту 
// (т.е., если она лежит хотя бы на одной из осей координат), 
// то функция должна возвращать null:
// const point = makePoint(0, 7);
// getQuadrant(point); // null
// getQuadrant(makePoint(2, 0)); // null

// getSymmetricalPoint — функция, возвращающая новую точку, 
// симметричную относительно начала координат. 
// Такая симметричность означает, что меняются знаки у x и y.
// getSymmetricalPoint(makePoint(1, 5)); // makePoint(-1, -5)

// calculateDistance — функция, 
// вычисляющая расстояние между точками по формуле: d = sqrt((x2−x1)^2+(y2−y1)^2)
// calculateDistance(makePoint(-2, -3), makePoint(-4, 4)); // ≈ 7.28


import { makePoint, getX, getY } from '@hexlet/points'; // eslint-disable-line

export const getQuadrant = (point) => {
  let x = getX(point);
  let y = getY(point);

  if (x === 0 || y === 0) {
    return null;
  } else if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }
}

export const getSymmetricalPoint = (point) => {
  let x = getX(point);
  let y = getY(point);

  if (x > 0) {
    x = 0 - x;
  } else {
    x = x - 2 * x;
  }

  if (y > 0) {
    y = 0 - y;
  } else {
    y = y - 2 * y;
  }

  return makePoint(x, y)
}

export const calculateDistance = (point1, point2) => {
  return Math.sqrt((getX(point2) - getX(point1))**2 + (getY(point2) - getY(point1))**2);
}