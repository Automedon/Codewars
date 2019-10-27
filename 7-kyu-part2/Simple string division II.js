/*
Description:
Consider the string "1 2 36 4 8". We want to take pairs of these numbers, concatenate each pair and determine how many of them of divisible by k.

If k = 3, we get following numbers ['12', '18', '21', '24', '42', '48', '81', '84'], all divisible by 3.   
Note:
-- 21 and 12 are different pairs. 
-- Elements must be from different indices, so '3636` is not a valid concatenated pair. 
Given a string of numbers and an integer k, return the number of pairs that when concatenated, are divisible by k.

solve("1 2 36 4 8", 3) = 8, because they are ['12', '18', '21', '24', '42', '48', '81', '84']
solve("1 3 6 3", 3) = 6. They are ['36', '33', '63', '63', '33', '36']
More examples in test cases. Good luck!
*/
function solve(s, k) {
  s = s.split(" ");
  let x = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (i === j) {
      } else if ((s[i] + s[j]) % k === 0) {
        x++;
      }
    }
  }
  return x;
}
