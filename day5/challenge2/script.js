alert("Go to console!");

const Mark = {
    name: 'Mark Miller',
    height: 1.69,
    mass: 78,

    calcBMI: function () {
        return this.mass / (this.height ** 2);
    }
};

const John = {
    name: 'John Smith',
    height: 1.95,
    mass: 92,

    calcBMI: function () {
        return this.mass / (this.height ** 2);
    }
};

const markBMI = Mark.calcBMI();
const johnBMI = John.calcBMI();

const result = markBMI > johnBMI
    ? `${Mark.name}'s BMI (${markBMI.toFixed(2)}) is higher than ${John.name}'s BMI (${johnBMI.toFixed(2)})`
    : `${John.name}'s BMI (${johnBMI.toFixed(2)}) is higher than ${Mark.name}'s BMI (${markBMI.toFixed(2)})`;

console.log(result);
