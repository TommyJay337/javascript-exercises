const convertToCelsius = function(fahrenheit) {
  let result = (fahrenheit - 32) * 5/9;
  let rounded = Math.round(result * 10) / 10;
  
  return rounded

};

const convertToFahrenheit = function(celsius) {
  let result = (celsius * 9/5) + 32;
  let rounded = Math.round(result * 10) / 10;
  
  return rounded;

};

console.log(convertToCelsius(68.789));      // Output: 20
console.log(convertToFahrenheit(20.679));   // Output: 68

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
