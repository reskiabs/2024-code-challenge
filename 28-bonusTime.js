// WPU Coding challenge 2024
// 28/366 on 01/05/2024
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;

console.log(bonusTime(10000, true));
console.log(bonusTime(25000, true));
console.log(bonusTime(10000, false));
console.log(bonusTime(60000, false));
console.log(bonusTime(2, true));
console.log(bonusTime(78, false));
console.log(bonusTime(67890, true));
