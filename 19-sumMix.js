// WPU Coding challenge 2024
// 19/366 on 01/05/2024
//www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x) {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    result += Number(x[i]);
  }
  return result;
}

const sumMix2 = (x) => x.reduce((acc, curr) => acc + Number(curr), 0);

console.log(sumMix2([9, 3, "7", "3"]));
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
