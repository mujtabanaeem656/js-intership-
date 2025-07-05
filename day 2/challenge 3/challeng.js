let dolphinsScores = [97, 112, 101];
let koalasScores = [109, 95, 106];

let avgDolphins = (dolphinsScores[0] + dolphinsScores[1] + dolphinsScores[2]) / 3;
let avgKoalas = (koalasScores[0] + koalasScores[1] + koalasScores[2]) / 3;

let minScore = 100;

if (avgDolphins > avgKoalas && avgDolphins >= minScore) {
  console.log(`Dolphins win the trophy with an average of ${avgDolphins.toFixed(1)}`);
} else if (avgKoalas > avgDolphins && avgKoalas >= minScore) {
  console.log(`Koalas win the trophy with an average of ${avgKoalas.toFixed(1)}`);
} else if (avgDolphins === avgKoalas && avgDolphins >= minScore && avgKoalas >= minScore) {
  console.log(`It's a draw! Both teams scored ${avgDolphins.toFixed(1)}`);
} else {
  console.log("No team wins the trophy");
}
