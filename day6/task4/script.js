alert("Go to console!");

const populations = [247, 1462, 175];
let percentages = [];
const worldpopulation = 7100;

const percentageofCountry = function (population) {
  let percent = (population * 100) / worldpopulation;
  return percent;
};

let i = 0;
while (i !== populations.length) {
  let percent = percentageofCountry(populations[i]);
  percentages.push(percent);
  i++;
}

console.log("Percentages:", percentages);
