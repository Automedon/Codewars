/*
Description:
Given a string of numbers confirm whether the total of all the individual even numbers are greater than the total of all the indiviudal odd numbers. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return:

'Even is greater than Odd'

If the sum of odd numbers is greater than the sum of even numbers return:

'Odd is greater than Even'

If the total of both even and odd numbers are identical return:

'Even and Odd are the same'
*/
function evenOrOdd(str) {
  let odd = [];
  let even = [];
  str.split``.map(v => ((v * 1) % 2 === 0 ? even.push(v) : odd.push(v)));
  odd = odd.reduce((a, b) => a + b * 1, 0);
  even = even.reduce((a, b) => a + b * 1, 0);
  return odd > even
    ? "Odd is greater than Even"
    : odd < even
    ? "Even is greater than Odd"
    : "Even and Odd are the same";
}
