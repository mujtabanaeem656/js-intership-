alert("Go to console!");

let calculateTip = function(bill) {
    let tip = (bill > 50 && bill < 300) ? bill * 15 / 100 : bill * 20 / 100;
    return tip;
};

const bills = [125, 555, 44];

const tips = [
    calculateTip(bills[0]),
    calculateTip(bills[1]),
    calculateTip(bills[2])
];

const totals = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
];

console.log("Bills are:", bills);
console.log("Tips are:", tips);
console.log("Totals are:", totals);
