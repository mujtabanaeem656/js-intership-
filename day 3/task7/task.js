let country = "Portugal";
let population = 33; // original population

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);

// Test with 13
population = 13;
console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);

// Test with 130
population = 130;
console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);

// Set back to original
population = 33;
