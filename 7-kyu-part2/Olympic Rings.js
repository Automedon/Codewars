/*
Description:
To celebrate the start of the Rio Olympics (and the return of 'the Last Leg' on C4 tonight) this is an Olympic inspired kata.

Given a string of random letters, you need to examine each. Some letters naturally have 'rings' in them. 'O' is an obvious example, but 'b', 'p', 'e', 'A', etc are all just as applicable. 'B' even has two!! Please note for this kata you can count lower case 'g' as only one ring.

Your job is to count the 'rings' in each letter and divide the total number by 2. Round the answer down. Once you have your final score:

if score is 1 or less, return 'Not even a medal!'; if score is 2, return 'Bronze!'; if score is 3, return 'Silver!'; if score is more than 3, return 'Gold!';

Dots over i's and any other letters don't count as rings.
*/
function olympicRing(a){
  let count=0;
  a.split('').map(v=>/[abdegopqADOPQR]/.test(v)?count++:v==='B'?count+=2:count+=0)
  count=Math.floor(count/2)
  return count===2?'Bronze!':count===3?'Silver!':count>=4?'Gold!':'Not even a medal!'
}
