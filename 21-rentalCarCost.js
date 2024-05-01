// WPU Coding challenge 2024
// 21/366 on 01/05/2024
// https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost1(d) {
  let discount = 0;
  if (d >= 7) {
    discount = 50;
  } else if (d >= 3) {
    discount = 20;
  }
  return d * 40 - discount;
}

const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);

console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(5));
console.log(rentalCarCost(6));
