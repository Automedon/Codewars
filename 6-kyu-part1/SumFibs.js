/*
Description:
Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.

Example:

sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5); 2 is the only even number in the sequence and doesn't have another number in the sequence to get added to in the indexed Fibonacci sequence.
Example:

sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// 2 + 8 + 34 = 44;
*/
function sumFibs(n) {
  let [a, b] = [1, 1];
  let result = 0;
  
  while (n--) {
    if (a % 2 == 0) result += a;
    [a, b] = [b, a+b];
  }
  
  return result;
};
