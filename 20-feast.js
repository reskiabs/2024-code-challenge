// WPU Coding challenge 2024
// 20/366 on 01/05/2024
// https://www.codewars.com/kata/5aa736a455f906981800360d

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}
const feast2 = (beast, dish) =>
  beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);

console.log(feast2("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));
