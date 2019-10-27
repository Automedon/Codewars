/*
Description:
Create a simple calculator that given a string of operators (+ - * and /) and numbers separated by spaces returns the value of that expression

Example:

Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.
*/

const Calculator = function() {
  this.evaluate = string => {
    let arr = string.split(" ");
    while (arr.length > 1) {
      const multDiv = arr.findIndex(a => a === "*" || a === "/");
      const index =
        multDiv === -1 ? arr.findIndex(b => b === "+" || b === "-") : multDiv;
      const a = Number(arr[index - 1]);
      const b = Number(arr[index + 1]);
      const calc =
        arr[index] === "/"
          ? a / b
          : arr[index] === "*"
          ? a * b
          : arr[index] === "-"
          ? a - b
          : a + b;
      arr.splice(index - 1, 3, calc);
    }
    return Number(arr[0]);
  };
};
