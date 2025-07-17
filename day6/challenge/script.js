alert("Go to console!");

const bills = [150, 75, 320, 210, 40, 88, 550, 99, 270, 30];
let tips = [];
let totals = [];

const calculateTip = function (bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = 0.15 * bill;
  } else {
    tip = 0.2 * bill;
  }
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  let tip = calculateTip(bills[i]);
  tips.push(tip);
  let total = tip + bills[i];
  totals.push(total);
}

let i = 0;
while (i != bills.length) {
  console.log(
    `Tip for bill ${bills[i]} is: ${tips[i].toFixed(2)} and total amount is: ${totals[i].toFixed(2)}`
  );
  i++;
}

console.log("BONUS PART - CALCULATING AVERAGE OF TOTALS");

let sum = 0;
for (let i = 0; i < totals.length; i++) {
  sum += totals[i];
}
let average = sum / totals.length;
console.log("Average of all the total amounts is: ", average.toFixed(2));
