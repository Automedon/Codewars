/*
Description:
Sort an array by value and index
Your task is to sort an array of integer numbers by the product of the value and the index of the positions. 

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers. 

Example:

Input: 23, 2, 3, 4, 5
Product of value and index:
23 => 23 * 1 = 23  -> Output-Pos 4
 2 =>  2 * 2 = 4   -> Output-Pos 1
 3 =>  3 * 3 = 9   -> Output-Pos 2
 4 =>  4 * 4 = 16  -> Output-Pos 3
 5 =>  5 * 5 = 25  -> Output-Pos 5

Output: 2, 3, 4, 23, 5



Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

function sortByValueAndIndex(array) {
  return array
    .map((x, i) => [x, x * i + x])
    .sort((a, b) => a[1] - b[1])
    .map(a => a[0]);
}
