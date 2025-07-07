alert("Check the console for the BMI comparison result.");

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);

let isMarkHigher = bmiMark > bmiJohn;

if (isMarkHigher) {
    console.log("Mark has a higher BMI than John.");
} else {
    console.log("John has a higher BMI than Mark.");
}
