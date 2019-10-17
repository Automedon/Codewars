/*
Description:
Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function. The solution should implement the most optimal algorithm possible.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true
*/

function solution(...arr) {
  return [...new Set(arr)].length != arr.length;
}
