/*
Description:
In numerology, every number has a certain meaning that expresses someones connection to the universe! This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date. Each time the sum exceeds 10, add up the 2 digits.
For example, new Date('06/14/2010') = 5
So, what is your number?
*/
function solution(date) {
  date = date.toLocaleDateString().split("-");
  let ans = date.reduce((a, b) => a + b * 1, 0);
  return ans
    .toString()
    .split("")
    .reduce((a, b) => a + b * 1, 0)
    .toString()
    .split("")
    .reduce((a, b) => a + b * 1, 0)
    .toString()
    .split("")
    .reduce((a, b) => a + b * 1, 0)
    .toString()
    .split("")
    .reduce((a, b) => a + b * 1, 0);
}
