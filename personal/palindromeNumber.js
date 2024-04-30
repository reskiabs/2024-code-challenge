function isPalindromeNumber(num) {
  const originalNumStr = num.toString();
  const reversedNumStr = originalNumStr.split("").reverse().join("");
  return originalNumStr === reversedNumStr;
}

// Contoh penggunaan:
const num1 = 121;
const num2 = 12321;
const num3 = 45654;
const num4 = 1001;
const num5 = 9889;
const num6 = 1234321;

console.log(isPalindromeNumber(num1));
console.log(isPalindromeNumber(num2));
console.log(isPalindromeNumber(num3));
console.log(isPalindromeNumber(num4));
console.log(isPalindromeNumber(num5));
console.log(isPalindromeNumber(num6));
