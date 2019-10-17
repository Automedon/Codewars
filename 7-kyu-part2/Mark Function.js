/*
Description:
Write a mark function and a markEnd function. The mark function need a param to tag this mark, and the markEnd should return the last mark param.

Example:

mark(1)
mark(2)
mark(3)
markEnd()
markEnd()
markEnd()
Should return:

3
2
1
if there is not mark prev, markEnd should return null.
*/
let arr =[]
function mark (a) {
  arr.push(a)
}

function markEnd () {
  return arr.pop()||null
}
