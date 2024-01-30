// WPU Coding challenge 2024
// 6/366 on 29/01/2024

// function DNAtoRNA(dna) {
//   let rna = '';
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === 'T') {
//       rna += 'U';
//     }else{
//       rna += dna[i]
//     }
//   }
//   return rna;
// }

// function DNAtoRNA(dna) {
//   let rna = '';
//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i] === 'T' ? 'U' : dna[i];
//   }
//   return rna;
// }

// regex = regular expression
// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

// function DNAtoRNA(dna) {
//   return dna
//     .split("")
//     .map((el) => (el === "T" ? "U" : el))
//     .join("");
// }

console.log(DNAtoRNA("GCAT"));
