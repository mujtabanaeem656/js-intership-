alert("Go to console!");

const temprature = [12, -5, 0, 7, "error", 21, 18, 25, 19, 17, 13, 8];

const maximum = function (arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "error") continue;
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

const minimum = function (arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "error") continue;
    if (arr[i] < min) min = arr[i];
  }
  return min;
};

const amplitude = function () {
  return maximum(temprature) - minimum(temprature);
};

console.log("Minimum temperature:", minimum(temprature));
console.log("Maximum temperature:", maximum(temprature));
console.log("Amplitude of temperature:", amplitude());
