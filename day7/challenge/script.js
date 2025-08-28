alert("Check the browser console for temperature forecasts.");

printForecast = function (arr) {
  let forecast = "";
  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}ºC in ${i + 1} day${i + 1 > 1 ? "s" : ""}, `;
  }
  return forecast;
};

const arr1 = [25, 30, 29];
const arr2 = [18, 20, 15, 10, 5];

let forecast1 = printForecast(arr1);
let forecast2 = printForecast(arr2);

console.log("Temperature forecast for first data is:", forecast1);
console.log("Temperature forecast for second data is:", forecast2);
