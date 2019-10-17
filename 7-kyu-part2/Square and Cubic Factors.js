/*
Description:
Task:
Your job here is to implement a function factors, which takes a number n, and outputs an array of arrays comprised of two parts, sq and cb. The part sq will contain all the numbers that, when squared, yield a number which is a factor of n, while the cb part will contain all the numbers that, when cubed, yield a number which is a factor of n. Discard all 1s from both arrays.

Both sq and cb should be sorted in ascending order.

What it looks like:
factors(Number) #=> [
  sq (all the numbers that can be squared to give a factor of n) : Array,
  cb (all the numbers that can be cubed   to give a factor of n) : Array
]
Some examples:
factors(1) #=> [[], []]
  # ones are discarded from outputs

factors(4) #=> [[2], []]
  # 2 squared is 4;   4 is a factor of 4

factors(16) #=> [[2, 4], [2]]
  # 2 squared is  4;  4 is a factor of 16
  # 4 squared is 16; 16 is a factor of 16
  # 2 cubed is    8;  8 is a factor of 16

factors(81) #=> [[3, 9], [3]]
  # 3 squared is  9;  9 is a factor of 81
  # 9 squared is 81; 81 is a factor of 81
  # 3 cubed is   27; 27 is a factor of 81
Also check out my other creations — Keep the Order, Naming Files, Elections: Weighted Average, Identify Case, Split Without Loss, Adding Fractions, Random Integers, Implement String#transpose, Implement Array#transpose!, Arrays and Procs #1, and Arrays and Procs #2.

If you notice any issues or have any suggestions/comments whatsoever, please don't hesitate to mark an issue or just comment. Thanks!
*/
function factors(n) {
  let arrSQ = [];
  let arrCB = [];
  for (let i = 2; i < n; i++) {
    if (n % (i * i) === 0) arrSQ.push(i);
    if (n % (i * i * i) === 0) arrCB.push(i);
  }
  return [arrSQ, arrCB];
}
