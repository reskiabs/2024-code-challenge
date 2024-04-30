// Fungsi untuk memeriksa apakah string merupakan palindrome
function isPalindrome(str) {
  // Menghapus karakter non-alphanumeric dan mengubah string menjadi lowercase
  const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(alphanumericStr);

  // Memeriksa apakah string adalah palindrome
  const len = alphanumericStr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (alphanumericStr[i] !== alphanumericStr[len - 1 - i]) {
      return false; // Bukan palindrome jika karakter tidak cocok
    }
  }
  return true; // Palindrome jika semua karakter cocok
}

// Contoh penggunaan:
const testStr1 = "A man, a plan, a canal, Panama!";
const testStr2 = "Racecar";
const testStr3 = "Hello";

console.log(isPalindrome(testStr1)); // Output: true
console.log(isPalindrome(testStr2)); // Output: true
console.log(isPalindrome(testStr3)); // Output: false
