/*
Description:
They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story. series #17:
Split odd and even

Task
Complete function splitOddAndEven, accept a number n(n>0), return an array that contains the continuous parts of odd or even digits.

Please don't worry about digit 0, it won't appear ;-)

Examples

splitOddAndEven(123)  ===  [1,2,3]

splitOddAndEven(223)  ===  [22,3]

splitOddAndEven(111)  ===  [111]

splitOddAndEven(13579)  ===  [13579]

splitOddAndEven(135246)  ===  [135,246]

splitOddAndEven(123456)  ===  [1,2,3,4,5,6]
*/
function splitOddAndEven(n) {
  let arr = [];
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
    if (
      ((str[i] % 2 == 0 && str[i + 1] % 2 !== 0) ||
        (str[i] % 2 !== 0 && str[i + 1] % 2 == 0)) &&
      i !== str.length - 1
    ) {
      arr.push(",");
    }
  }
  return arr.join``.split`,`.map(v => v * 1);
}
