// WPU Coding challenge 2024
// 8/366 on 31/01/2024
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`;
  }

  return result;
};

console.log(countSheep(3));

function countSheep2(num) {
  return [...Array(num)].map((i) => `${i + 1} sheep...`).join("");
}

console.log(countSheep2(3));

const countSheep3 = (num) =>
  [...Array(num).keys()].map((i) => `${i + 1} sheep...`).join("");

console.log(countSheep3(3));
