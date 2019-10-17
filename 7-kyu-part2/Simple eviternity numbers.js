/*
Description:
An eviternity number is a number which contains only digits 8, 5 and 3, and the count of the digit 8 >= count of digit 5 >= count of digit 3. The first few eviternity numbers are as follows.

[8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]
You will be given two integers, a and b, and your task is to return the number of eviternity numbers in the range >= a and < b.

For example:
solve(0,1000) = 14, because they are [8, 58, 85, 88, 358, 385, 538, 583, 588, 835, 853, 858, 885, 888]
The upper bound will not exceed 500,000.

More examples in test cases. Good luck!
*/
const solve = (a, b) => {
  const countCheck = n => {
    let s = n + ``;
    return (
      s.replace(/[35]/g, "").length >= s.replace(/[38]/g, "").length &&
      s.replace(/[38]/g, "").length >= s.replace(/[58]/g, "").length
    );
  };
  let i = 0;
  while (a < b) {
    i += /^[358]+$/.test(a + ``) && countCheck(a);
    a++;
  }
  return i;
};
