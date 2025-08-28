alert("Go to console!");

const temprature1 = [12, 18, -4, 7, "error"];
const temprature2 = [23, 5, 0, -2, 15];

const mergeArrays = function (arr1, arr2) {
  return arr1.concat(arr2);
};

const maximum = function (arr) {
  let max = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "error") continue;
    if (max === null || arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const minimum = function (arr) {
  let min = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "error") continue;
    if (min === null || arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const temprature3 = mergeArrays(temprature1, temprature2);

console.log("Given temperatures are:", temprature3);
console.log("Minimum value of temperature is:", minimum(temprature3));
console.log("Maximum value of temperature is:", maximum(temprature3));
console.log("Amplitude of temperature is:", maximum(temprature3) - minimum(temprature3));
