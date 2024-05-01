// WPU Coding challenge 2024
// 27/366 on 01/05/2024
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

function setAlarm(employed, vacation) {
  if (employed) {
    if (vacation) {
      return false;
    } else {
      return true;
    }
  } else {
    if (vacation) {
      return false;
    } else {
      return true;
    }
  }
}

const setAlarm2 = (employed, vacation) => employed && !vacation;

console.log(setAlarm2(true, true));
console.log(setAlarm2(false, true));
console.log(setAlarm2(true, false));
