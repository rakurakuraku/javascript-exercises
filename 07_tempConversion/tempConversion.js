const convertToCelsius = function(tempF) {
  let result = (tempF -32) / 1.8;
  let cResult = Number(result.toFixed(1));
  return cResult;
};
const convertToFahrenheit = function(tempC) {
  let result = (tempC * 1.8) + 32;
  let fResult = Number(result.toFixed(1));
  return fResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
