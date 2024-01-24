// WPU Coding challenge 2024
// 1/366 on 23/01/2024

function loopFor(x) {
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}

function reduce(x) {
  const result = x.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
  return result;
}

const arrow = (x) => x.reduce((a, b) => a * b);

console.log(loopFor([1, 2, 3, 4]));
console.log(reduce([1, 2, 3, 4]));
console.log(arrow([1, 2, 3, 4]));
