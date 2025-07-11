alert("Please go to the console!");

let worldPopulation = 7900;

let worldPopulationPercentage = (population) => {
    let percentage = (population * 100) / worldPopulation;
    return percentage;
};

const Portugal = worldPopulationPercentage(10);
const Pakistan = worldPopulationPercentage(247);
const India = worldPopulationPercentage(1462);

console.log(`Portugal's population is 10 million and its percentage of world population is ${Portugal.toFixed(2)}%`);
console.log(`Pakistan's population is 247 million and its percentage of world population is ${Pakistan.toFixed(2)}%`);
console.log(`India's population is 1462 million and its percentage of world population is ${India.toFixed(2)}%`);
