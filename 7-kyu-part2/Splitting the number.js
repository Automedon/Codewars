/*
Description:
Splitting the number num is the representation of num as the sum of positive integers, called parts.
The difference between any part cannot differ by more than 1.

First come the big numbers, then the smaller ones "3 + 3 + 2 + 2".

num - the number to be splitting.
p - the number of splittings.

Example:

splittingNumber(5,0) --> "5"
splittingNumber(5,1) --> "5"
splittingNumber(5,2) --> "3 + 2"
splittingNumber(5,3) --> "2 + 2 + 1"
splittingNumber(5,4) --> "2 + 1 + 1 + 1"
splittingNumber(5,5) --> "1 + 1 + 1 + 1 + 1"
splittingNumber(5,6) --> "1 + 1 + 1 + 1 + 1" (no extra zeros needed)

Have fun coding 🙂
*/
const splittingNumber = (num, p) => {
  if (num <= p) p = num;
  let arr = Array.from({ length: p }, x => 1);
  let i = 0;
  while (arr.reduce((a, b) => a + b) < num) {
    arr[i]++;
    i++;
    if (i === arr.length) {
      i = 0;
    }
  }
  return arr.join(" + ");
};
