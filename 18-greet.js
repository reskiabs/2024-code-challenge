// WPU Coding challenge 2024
// 18/366 on 01/05/2024
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

const greet2 = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");

console.log(greet2("Daniel", "Daniel"));
