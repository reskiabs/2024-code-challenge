// WPU Coding challenge 2024
// 9/366 on 31/01/2024
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function (list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minValue) {
      minValue = list[i];
    }
  }
  return minValue;
};

var max = function (list) {
  let maxValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > maxValue) {
      maxValue = list[i];
    }
  }
  return maxValue;
};

console.log(min([42, 54, 65, 87, 0]));
console.log(max([42, 54, 65, 87, 0]));

const min2 = (list) => list.sort((a, b) => a - b)[0];
const max2 = (list) => list.sort((a, b) => b - a)[0];

console.log(min2([-52, 56, 30, 29, -54, 0, -110]));
console.log(max2([-52, 56, 30, 29, -54, 0, -110]));
