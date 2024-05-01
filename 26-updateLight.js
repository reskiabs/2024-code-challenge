// WPU Coding challenge 2024
// 26/366 on 01/05/2024
// https://www.codewars.com/kata/58649884a1659ed6cb000072

function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else {
    return "green";
  }
}

const updateLight2 = (current) =>
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

const updateLight3 = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

console.log(updateLight2("green"));
console.log(updateLight2("yellow"));
console.log(updateLight2("red"));
