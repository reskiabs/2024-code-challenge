// WPU Coding challenge 2024
// 13/366 on 14/04/2024
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {
  let result = 0;
  for (i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      result += 3;
    } else if (games[i][0] === games[i][2]) {
      result += 1;
    }
  }
  return result;
}

function points2(games) {
  return games.reduce((total, game) => {
    if (game[0] > game[2]) {
      total += 3;
    } else if (game[0] === game[2]) {
      total += 1;
    }
    return total;
  }, 0);
}

function points3(games) {
  return games.reduce(
    (total, game) =>
      total + (game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0),
    0
  );
}

console.log(
  points2([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ])
);
