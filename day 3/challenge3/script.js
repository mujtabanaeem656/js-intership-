alert("Go to console for result!");

// Regular Match - Data 1
let dolphinScore1 = 96 + 108 + 89;
let koalaScore1 = 88 + 91 + 110;

let avgDolphin1 = dolphinScore1 / 3;
let avgKoala1 = koalaScore1 / 3;

if (avgDolphin1 === avgKoala1) {
  console.log("Match ended in a draw");
} else if (avgDolphin1 > avgKoala1) {
  console.log("Dolphins win the match");
} else {
  console.log("Koalas win the match");
}

// BONUS 1 - With minimum score rule
console.log("BONUS 1 Result");

let minScore = 100;
let dolphinScore2 = 97 + 112 + 101;
let koalaScore2 = 109 + 95 + 123;

let avgDolphin2 = dolphinScore2 / 3;
let avgKoala2 = koalaScore2 / 3;

if (avgDolphin2 > avgKoala2 && avgDolphin2 >= minScore) {
  console.log("Dolphins win the match");
} else if (avgKoala2 > avgDolphin2 && avgKoala2 >= minScore) {
  console.log("Koalas win the match");
} else {
  console.log("Match ended in a draw");
}

// BONUS 2 - Draw only valid if both meet minScore
console.log("BONUS 2 Result");

if (avgDolphin2 === avgKoala2 && avgDolphin2 >= minScore && avgKoala2 >= minScore) {
  console.log("Match ended in a draw");
} else if (avgDolphin2 > avgKoala2 && avgDolphin2 >= minScore) {
  console.log("Dolphins win the match");
} else if (avgKoala2 > avgDolphin2 && avgKoala2 >= minScore) {
  console.log("Koalas win the match");
} else {
  console.log("Neither team wins the match");
}
