// WPU Coding challenge 2024
// 25/366 on 01/05/2024
// https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
    result += str[i];
  }

  return result;
}

const doubleChar2 = (str) =>
  str
    .split("")
    .map((el) => el + el)
    .join("");

console.log(doubleChar2("Reski Abbas"));
