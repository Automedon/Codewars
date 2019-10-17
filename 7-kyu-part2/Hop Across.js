/*
You are trying to cross a river by jumping along stones. Every time you land on a stone, you hop forwards by the value of that stone. If you skip over a stone then its value doesn't affect you in any way. Eg:

 x--x-----x-->
[1][2][5][1]
Of course, crossing from the other side might give you a different answer:

 <--------x--x
   [1][2][5][1]
Given an array of positive integers, return the total number of steps it would take to go all the way across the river (and past the end of the array) and then all the way back. All arrays will contain at least one element, and may contain up to 100 elements.

Examples
  x--x-----x-->
 [1][2][1][2]
<----x-----x

therefore hop_across([1,2,1,2]) = 3 + 2 = 5

   x-----x--------x------>
  [2][2][3][1][1][2][1]
<--------x--x-----x--x

therefore hop_across([2,2,3,1,1,2,1]) = 3 + 4 = 7
*/
function hopAcross(lst) {
  let jump = 0;
  for (let i = 0; i < lst.length; ) {
    jump++;
    i += lst[i];
  }
  let rev = lst.reverse();
  for (let i = 0; i < lst.length; ) {
    jump++;
    i += rev[i];
  }
  return jump;
}
