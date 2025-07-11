alert('Please go to console for result!');

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital is ${capitalCity}`;
}

const pakistan = describeCountry('Pakistan', 247, 'Islamabad');
console.log(pakistan);

const india = describeCountry('India', 1464, 'Delhi');
console.log(india);

const bangladesh = describeCountry('Bangladesh', 175, 'Dhaka');
console.log(bangladesh);
