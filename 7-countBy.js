// WPU Coding challenge 2024
// 7/366 on 31/01/2024

// function countBy(x, n) {
//   let z = [];
//   for (let i = x; i <= x * n; i += x) {
//     z.push(i);
//   }
//   return z;
// }

// const countBy = (x, n) => {
//   return [...Array(n)].map((_, i) => x * (i + 1));
// };

const countBy = (x, n) => [...Array(n)].map((_, i) => x * (i + 1));

console.log(countBy(2, 5));
