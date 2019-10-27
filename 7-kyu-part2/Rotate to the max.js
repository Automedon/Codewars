/*
Task
Given a number, return the maximum value by rearranging its digits.

Examples:

(123) => 321 (786) => 876 ("001") => 100 (999) => 999 (10543) => 54310

^Note the number may be given as a string
*/
const rotateToMax = n => {
  return (
    n
      .toString()
      .split("")
      .sort((a, b) => a < b)
      .join("") * 1
  );
};
