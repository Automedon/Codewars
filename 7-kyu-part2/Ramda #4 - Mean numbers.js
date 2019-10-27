/*
You will be given an array of numbers. Calculate the mean of these numbers, but only if all of them are divisible by three. If there is at least one number not divisible by three, return null.

Example:

mean3([3,6,6,9,21,3])  // 8
mean3([3,6,8,9,21,3])  // null
Suggested Ramda functions to be used:

equals
modulo
all
allPass
mean
ifElse
complement
isEmpty
always
__
pipe
The Ramda library is preloaded and accessible under R (e.g. R.map).
*/
const mean3 = numbers => {
  if (numbers.length === 0) return null;
  if (numbers.every(v => v % 3 === 0))
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return null;
};
