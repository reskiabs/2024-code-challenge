// WPU Coding challenge 2024
// 2/366 on 24/01/2024

const ForLoop = (n) => {
  const result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

// Example usage:
console.log(ForLoop(5));
// Output: [5, 4, 3, 2, 1]

const MapReverse = (n) => {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .reverse();
};

// Example usage:
console.log(MapReverse(5)); // Output: [5, 4, 3, 2, 1]

const SpreadOperator = (n) => [...Array(n)].map((_, i) => n - i);

// Example usage:
console.log(SpreadOperator(5));
// Output: [5, 4, 3, 2, 1]

const ArrayFill = (n) =>
  (n = Array.from(
    {
      length: n,
    },
    (_, i) => n - i
  ));

// Example usage:
console.log(ArrayFill(5)); // Output: [5, 4, 3, 2, 1]
