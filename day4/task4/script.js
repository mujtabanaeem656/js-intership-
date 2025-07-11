alert('Please go to console!');

let worldPopulation = 7900;

function percentageOfWorld(population) {
    let percentage = (population * 100) / worldPopulation;
    return percentage;
}

function describeCountry(country, population) {
    let countryPercentage = percentageOfWorld(population);
    return `${country} has ${population} million people and its percentage is ${countryPercentage.toFixed(2)}%`;
}

const pakistanDescription = describeCountry("Pakistan", 247);
const indiaDescription = describeCountry("India", 1462);
const bangladeshDescription = describeCountry("Bangladesh", 175);

console.log(`${pakistanDescription},
${indiaDescription},
${bangladeshDescription}`);
