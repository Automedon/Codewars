/*
Description:
Leonardo numbers
The Leonardo numbers are a sequence of numbers defined by:

L(0) = 1 || 0
L(1) = 1 || 0
L(x) = L(x - 1) + L(x - 2) + 1
Generalizing the above a bit more:

L(x) = L(x - 1) + L(x - 2) + a
Assume a to be the add number.

Task
Return the first n Leonardo numbers as an array (vector<int> in C++)

Input
n : The number of Leonardo numbers to be shown
L0 : The initial value of L(0)
L1 : The initial value of L(1)
add : The add number
Examples
input  : n = 5 , L0 = 1 , L1 = 1 , add = 1
output : [ 1, 1, 3, 5, 9 ]

input  : n = 5 , L0 = 0 , L1 = 0 , add = 2
output : [ 0, 0, 2, 4, 8 ]

input  : n = 10 , L0 = 0 , L1 = 1 , add = 4
output : [ 0, 1, 5, 10, 19, 33, 56, 93, 153, 250 ]

input  : n = 5 , L0 = 0 , L1 = 0 , add = 0
output : [ 0, 0, 0, 0, 0 ]
Note
n will always be greater than or equal to 2
*/

L = (n , L0 , L1 , add) => {
  let newArr = [L0, L1];
  for(let i = 2; i < n; i++) {
    newArr.push(newArr[i - 2] + newArr[i - 1] + add)
  }

  return newArr;
}
