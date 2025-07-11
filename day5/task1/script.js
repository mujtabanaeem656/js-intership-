alert('Go to console!');

const myCountry = {
    country: 'Pakistan',
    population: 247,
    capital: 'Islamabad',
    language: 'Urdu',
    neighbours: ['India', 'Afghanistan', 'China', 'Iran']
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries, and its capital is ${myCountry.capital}.`);

console.log("Increased population using dot notation:");
myCountry.population += 2;
console.log(myCountry.population, 'million');

console.log("Decreased population using bracket notation:");
myCountry['population'] -= 2;
console.log(myCountry['population'], 'million');
