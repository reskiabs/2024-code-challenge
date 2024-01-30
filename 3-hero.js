// WPU Coding challenge 2024
// 3/366 on 29/01/2024

// function hero(bullets, dragons) {
//   if (bullets >= dragons * 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function hero(bullets, dragons) {
//   return bullets >= dragons * 2;
// }

const hero = (bullets, dragons) => bullets >= dragons * 2;

console.log(hero(10, 5));
console.log(hero(7, 4));
