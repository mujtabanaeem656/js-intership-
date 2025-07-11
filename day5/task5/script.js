alert("Go to console!");

const populations = [247, 1462, 175, 60];
console.log(populations.length === 4);

let worldPopulation = 7900;

function worldPercentage1(population) {
    let percentage = (population * 100) / worldPopulation;
    return percentage;
}

let percentages = [
    worldPercentage1(populations[0]),
    worldPercentage1(populations[1]),
    worldPercentage1(populations[2]),
    worldPercentage1(populations[3])
];

console.log("Percentage of country 1:", percentages[0]);
console.log("Percentage of country 2:", percentages[1]);
console.log("Percentage of country 3:", percentages[2]);
console.log("Percentage of country 4:", percentages[3]);
