alert("Go to the console to see who has a higher BMI.");

let mark_weight = 78;
let mark_height = 1.69;
let john_weight = 92;
let john_height = 1.95;

let bmi_mark = mark_weight / (mark_height ** 2);
let bmi_john = john_weight / (john_height ** 2);

console.log("Mark's BMI is:", bmi_mark);
console.log("John's BMI is:", bmi_john);

let markHasHigherBMI = bmi_mark > bmi_john;

if (markHasHigherBMI) {
    console.log("Yes, Mark's BMI", bmi_mark.toFixed(2), "is higher than John's BMI", bmi_john.toFixed(2));
} else {
    console.log("No, Mark's BMI", bmi_mark.toFixed(2), "is lower than John's BMI", bmi_john.toFixed(2));
}
