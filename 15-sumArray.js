// WPU Coding challenge 2024
// 15/366 on 22/04/2024
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

function sumArray(array) {
  if (array === null || array.length <= 2) return 0;
  const sorted = array.sort((a, b) => a - b);

  let result = 0;

  for (i = 1; i < sorted.length - 1; i++) {
    result += sorted[i];
  }

  return result;
}

function sumArray2(array) {
  if (array === null || array.length <= 2) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, curr) => acc + curr);
}

const sumArray3 = (array) =>
  array === null || array.length <= 2
    ? 0
    : array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curr) => acc + curr);

console.log(sumArray([-6, -20, -1, -10, -12]));
