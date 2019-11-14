// Напишите функцию diff, которая принимает два угла (integer), 
// каждый от 0 до 360, и возвращает наименьшую разницу между ними.


const diff = (angle1, angle2) => {

    let angle_diff;
    let rev_angle_diff;

    if (angle1 > angle2) {
        angle_diff = angle1 - angle2;
    } else {
        angle_diff = angle2 - angle1;
    }

    rev_angle_diff = 360 - angle_diff;

    if (angle_diff > rev_angle_diff) {
        return rev_angle_diff;
    } else {
        return angle_diff;
    }

}

console.log(diff(10, 100))
console.log(diff(95, 360))
console.log(diff(0, 190))
