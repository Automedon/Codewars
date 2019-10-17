var Calculator = {};

Calculator.add = function(a, b) {
  return a + b;
};
Calculator.subtract = function(a, b) {
  return a - b;
};
Calculator.multiply = function(a, b) {
  return a * b;
};
Calculator.divide = function(a, b) {
  return !b ? false : a / b;
};
