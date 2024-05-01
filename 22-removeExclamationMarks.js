// WPU Coding challenge 2024
// 22/366 on 01/05/2024
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

function removeExclamationMarks1(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "!") {
      result += s[i];
    }
  }

  return result;
}

const removeExclamationMarks = (s) => s.split("!").join("");

console.log(removeExclamationMarks("Hello World!"));
