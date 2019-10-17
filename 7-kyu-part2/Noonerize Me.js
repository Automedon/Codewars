/*
Description:
Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:

[123, 456] = 423 - 156 = 267
Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. The provided array will always contain 2 elements.

When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account that the numbers will be of varying magnitude, between and within test cases.
*/
function noonerize(numbers) {
  if (!numbers.every(v=>typeof v === 'number')){ return "invalid array"  }
  let n1 = (numbers[1].toString().slice(0,1)+numbers[0].toString().slice(1))*1
  let n2 = (numbers[0].toString().slice(0,1)+numbers[1].toString().slice(1))*1
  return Math.abs(n1-n2)
}
