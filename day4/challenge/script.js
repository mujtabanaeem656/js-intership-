let calculateAverage = (score1, score2, score3) => {
    let average = (score1 + score2 + score3) / 3;
    return average;
};

function checkWinner(team1, team2, average1, average2) {
    if (average1 * 2 < average2) {
        return `${team2} wins the match`;
    } else if (average1 > average2 * 2) {
        return `${team1} wins the match`;
    } else {
        return `No team wins the match`;
    }
}

// Data 1
let average1 = calculateAverage(44, 23, 71);
let average2 = calculateAverage(65, 54, 49);
console.log(`Dolphins' average is ${average1}`);
console.log(`Koalas' average is ${average2}`);

let winner = checkWinner("Dolphins", "Koalas", average1, average2);
console.log(winner);

console.log("\n");

// Data 2
average1 = calculateAverage(85, 54, 41);
average2 = calculateAverage(23, 34, 27);
console.log(`Dolphins' average is ${average1}`);
console.log(`Koalas' average is ${average2}`);

winner = checkWinner("Dolphins", "Koalas", average1, average2);
console.log(winner);
