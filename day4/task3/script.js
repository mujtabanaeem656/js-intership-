alert("Go to console for result!");

let worldPopulation = 7900;

function worldPopulation1(country, population) {
    let percentage = (population * 100) / worldPopulation;
    console.log(`${country} has ${population} million people, which is ${percentage.toFixed(2)}% of the world population.`);
}

worldPopulation1("Pakistan", 247);
worldPopulation1("India", 1462);
worldPopulation1("Bangladesh", 175);

console.log('\nUsing Function Expression:\n');

let worldPopulation2 = function(country, population) {
    let percentage = (population * 100) / worldPopulation;
    console.log(`${country} has ${population} million people, which is ${percentage.toFixed(2)}% of the world population.`);
};

worldPopulation2("Pakistan", 247);
worldPopulation2("India", 1462);
worldPopulation2("Bangladesh", 175);
