// WPU Coding challenge 2024
// 1/366 on 23/01/2024

function grow1(x) {
  let result = x[0];
  for (let i = 1; i < x.length; i++) {
    result *= x[i];
  }

  return result;
}

function grow2(x) {
  const result = x.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
    // accumulator, nilai hasil akumulasi
    // currentValue, nilai saat ini
  }, 1 /* initial value */);
  return result;
}

const grow3 = (x) => x.reduce((a, b) => a * b);

console.log(grow1([1, 2, 3, 4]));
console.log(grow2([1, 2, 3, 4]));
console.log(grow3([1, 2, 3, 4]));
