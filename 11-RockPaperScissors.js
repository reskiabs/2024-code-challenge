// WPU Coding challenge 2024
// 11/366 on 14/04/2024

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "rock" && p2 === "scissors")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("scissors", "paper"));

// clean code

const getWinner = (p1, p2) =>
  p1 === p2
    ? "Draw!"
    : (p1 + p2).includes("scissors")
    ? "Player 1 won!"
    : "Player 2 won!";

console.log(getWinner("scissors", "paper"));
