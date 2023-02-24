/*
Description:
Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).

You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.

If the name has a length of 0, return "name must be at least one letter"

Examples
"Bill" ==> [ ["B", "i"],
             ["l", "l"] ]

"Frank" ==> [ ["F", "r", "a"],
              ["n", "k", "."],
              [".", ".", "."] ]
*/

const matrixfy = str => {
  if (!str.length) return "name must be at least one letter";
  let length = 1;
  while (str.length > length) {
    length++;
    if (str.length < Math.pow(length, 2)) break;
  }
  let arr = [];
  let z = 0;
  for (let i = 0; i < length; i++) {
    let temp = [];
    for (let j = 0; j < length; j++) {
      temp.push(str[z] || ".");
      z++;
    }
    arr.push(temp);
  }
  return arr;
};
