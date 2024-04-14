// WPU Coding challenge 2024
// 12/366 on 14/04/2024
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray1(arr1, arr2) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    result += arr2[i];
  }
  return result;
}

function arrayPlusArray2(arr1, arr2) {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      result += arguments[i][j];
    }
  }

  return result;
}

function arrayPlusArray3(arr1, arr2) {
  return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);
}
const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((a, b) => a + b, 0);
// a = accumulator, b = currentValue
// 0 = nilai awal, kalau gak pake, ngambil nilai pertama dalam array

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
