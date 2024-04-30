// WPU Coding challenge 2024
// 14/366 on 22/04/2024
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

function getGrade(...s) {
  const average = s.reduce((acc, curr) => acc + curr) / s.length;
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));
