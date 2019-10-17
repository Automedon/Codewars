/*
Description:
Convert Improper Fraction to Mixed Number
You will need to convert an improper fraction to a mixed number. For example:

getMixedNum('18/11'); // Should return '1 7/11'
getMixedNum('13/5'); // Should return '2 3/5'
getMixedNum('75/10'); // Should return '7 5/10'
NOTE: All fractions will be greater than 0.
*/
function getMixedNum(fraction) {
  let n = fraction.split('/')
  return `${Math.floor(n[0]/n[1])} ${n[0]%n[1]}/${n[1]}`
}
