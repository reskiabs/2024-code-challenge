// WPU Coding challenge 2024
// 4/366 on 29/01/2024

// function smash(words) {
//   return words.join(" ");
// }

// const smash = (words) => words.join(" ");

function smash(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i < words.length - 1) result += " ";
  }
  return result;
}

console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
