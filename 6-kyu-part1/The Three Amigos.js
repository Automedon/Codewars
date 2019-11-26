/*
Description:
Kata Task
Given a list of random integers, return the Three Amigos.

These are 3 numbers that live next to each other in the list, and who have the most in common with each other by these rules:

lowest statistical range
same parity
Notes
The list will contain at least 3 numbers
If there is more than one answer then return the first one found (reading the list left to right)
If there is no answer (e.g. no 3 adjacent numbers with same parity) then return an empty list.
Examples
ex1
Input = [1, 2, 34, 2, 1, 5, 3, 5, 7, 234, 2, 1]
Result = [5,3,5]
ex2
Input = [2, 4, 6, 8, 10, 2, 2, 2, 1, 1, 1, 5, 3]
Result = [2,2,2]
ex3
Input = [2, 4, 5, 3, 6, 3, 1, 56, 7, 6, 3, 12]
Result = []
*/
function threeAmigos(numbers) {
  let range = x => Math.max(...x) - Math.min(...x), parity = x => x.every(n => (n + x[0])%2 == 0), arr = []
  for (let i = 0; i < numbers.length - 2; i++) {
    let n = numbers.slice(i, i+3)
    if (parity(n) && (arr.length == 0 || range(n) < range(arr)))
      arr = n
  }
  return arr
}
