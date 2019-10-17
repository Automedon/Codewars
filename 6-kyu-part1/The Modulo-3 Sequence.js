/*
Description:
#Task: Consider a sequence where the first two numbers are 0 and 1 and the next number of the sequence is the sum of the previous 2 modulo 3. Write a function that finds the nth number of the sequence.

#Constraints:

1 ≤ N ≤ 10^19
#Example:

sequence(1);
0
sequence(2);
1
sequence(3);
1
*/
function sequence(n){
  return [1,0,1,1,2,0,2,2][n%8];
}
