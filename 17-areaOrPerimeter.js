// WPU Coding challenge 2024
// 17/366 on 01/05/2024
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return 2 * l + 2 * w; //hitung keliling
  }
};

const areaOrPerimeter2 = (l, w) => (l === w ? l * w : 2 * (l + w));

console.log(areaOrPerimeter2(3, 3));
console.log(areaOrPerimeter2(6, 10));
