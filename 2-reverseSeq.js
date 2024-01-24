// WPU Coding challenge 2024
// 2/366 on 24/01/2024

const reverseSeqFor = (n) => {
  const result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

const reverseSeq = (n) => {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .reverse();
};

const simpleReverseSeq = (n) => [...Array(n)].map((_, i) => n - i);

console.log(reverseSeqFor(5));
console.log(reverseSeq(5));
console.log(simpleReverseSeq(5));
