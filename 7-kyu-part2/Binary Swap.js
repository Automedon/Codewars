/*
Description:
Binary Swap
Task
Write a function binarySwap which accepts exactly 1 argument and should behave as follows:

Basic Behaviour
If the input is 0 then the return value should be 1 e.g. binarySwap(0) === 1
If the input is 1 then the return value should be 0 e.g. binarySwap(1) === 0
The strings '0' and '1' should be treated as 0 and 1 respectively e.g. binarySwap('0') === 1 && binarySwap('1') === 0
Functions
When the argument is a function, binarySwap should obtain its return value and operate on it. If the return value is still a function, your function is expected to obtain the return values of the nested functions until the return value is no longer a function. E.g.

binarySwap(function () {
  return 0;
}) --> binarySwap(0) === 1

binarySwap(function () {
  return function () {
    return 1;
  }
}) --> binarySwap(function () {
  return 1;
}) --> binarySwap(1) === 0

binarySwap(function () {
  return function () {
    return function () {
      return function () {
        return '0';
      }
    }
  }
}) --> binarySwap(function () {
  return function () {
    return function () {
      return '0';
    }
  }
}) --> binarySwap(function () {
  return function () {
    return '0';
  }
}) --> binarySwap(function () {
  return '0';
}) --> binarySwap('0') === 1

binarySwap(function () {
  return function () {
    return [0, '1'];
  }
}) --> binarySwap(function () {
  return [0, '1'];
}) === binarySwap([0, '1']) // We'll learn how to deal with arrays next ;)
Arrays
When given an array, your function should apply the binary swap to each element in the array and return the resulting array except if the array contains exactly one element and that element is not a function - in that case simply treat the array as a number. E.g.

binarySwap([0]) === 1 // Note: for arrays with exactly one element, simply return the number, NOT the array
binarySwap([1, 0]) <--> [0, 1]
binarySwap(['1', 0, '0', 1]) <--> [0, 1, 1, 0]
Your function should also deal with nested arrays properly:

binarySwap([1, [0, ['1', ['0', [1]]]]]) <--> [0, [1, [0, [1, 0]]]]
Note: in the more advanced test cases, arrays and functions will be mixed together so beware! ;)

Good luck and happy coding :D
*/
function binarySwap(input) {
  if (input == 0) { return 1; }
  if (input == 1) { return 0; }
  
  if (typeof input === 'function') {
    return binarySwap(input());
  }
  
  if (Array.isArray(input)) {
    return input.map(item => {
      return binarySwap(item);
    });
  }
}
