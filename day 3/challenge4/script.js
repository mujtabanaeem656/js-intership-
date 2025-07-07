alert("Please check the console for the result!");

let bill;
let tip;

console.log("Test 1");
bill = 275;
tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
console.log("The bill is:", bill, "and the tip is:", tip);

console.log("Test 2");
bill = 40;
tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
console.log("The bill is:", bill, "and the tip is:", tip);

console.log("Test 3");
bill = 430;
tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
console.log("The bill is:", bill, "and the tip is:", tip);
