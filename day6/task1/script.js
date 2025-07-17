alert("Go to console!");

const populations = [247, 1462, 175];
const worldPopulation = 7100;
let percentages = [];

const percentageOfCountry = function (population) {
  return (population * 100) / worldPopulation;
};

for (let i = 0; i < populations.length; i++) {
  percentages[i] = percentageOfCountry(populations[i]);
}

console.log(`Percentages are: ${percentages}`);

let country;
for (let i = 0; i < populations.length; i++) {
  if (i === 0) {
    country = "Pakistan";
  } else if (i === 1) {
    country = "India";
  } else if (i === 2) {
    country = "Bangladesh";
  }
  console.log(`Percentage of ${country} is: ${percentages[i].toFixed(2)}%`);
}
