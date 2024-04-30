// WPU Coding challenge 2024
// 16/366 on 30/04/2024
// https://www.codewars.com/kata/563e320cee5dddcf77000158

function getAverage(marks) {
  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  return Math.floor(total / marks.length);
}

const getAverage2 = (marks) =>
  Math.floor(marks.reduce((a, b) => a + b) / marks.length);

console.log(getAverage2([1, 2, 3, 4, 5]));
