alert("Go to console!");

const Mycountry = {
    country: 'Pakistan',
    population: 247,
    capital: 'Islamabad',
    language: 'urdu',
    neghbours: ['India', 'Afghanistan', 'China', 'Iran'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language} speaking people and ${this.neghbours.length} neighbour countries and its capital is ${this.capital}`;
    },

    CheckIsland: function () {
        return `The country is ${this.neghbours.length === 0 ? "an" : "not an"} island.`;
    }
};

console.log(Mycountry.describe());
console.log(Mycountry.CheckIsland());
