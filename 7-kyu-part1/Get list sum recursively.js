/*
Description:
Write function sumR which returns the sum of values in a given list. Try no to cheat and provide recursive solution.
*/
function sumR(x) {
  return x.reduce((a, b) => a + b, 0);
}
