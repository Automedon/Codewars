/*
Description:
Set objects are new JavaScript built-in objects defined since ECMAScript 2015

A Set lets you store unique values of any type. It comes with some useful methods like .add, .clear, .has . . . BUT some "Set operations" are missing, like . . .

Equality

Two sets ( A, B ) are considered "equal" if all elements of A are elements of B and all elements of B are elements of A no matter "order" of elements.

Examples:
  {1, 2} == {2, 1}
  {1, 2} != {1, 2, 3}
Task
Create 2 functions, areEqual and notEqual, getting 2 sets as arguments and returning a true or false depending if these 2 sets are "equal" (respectively not equal) ie : if all elements of 1st set are elements of 2d and all elements of 2d set are elements of 1st.

Examples:
A  = new Set([1,2]);
A2 = new Set([2,1]);
B  = new Set([2,3]);

areEqual(A,B)  // -> false
areEqual(A,A2) // -> true
notEqual(A,B)  // -> true
 

" May the Code be with you ! "
*/
function areEqual(s1, s2){
  let arr1 = [...s1].sort().sort((a,b)=>a>b)
  let arr2 = [...s2].sort().sort((a,b)=>a>b)
  return arr1.every((v,i)=>v===arr2[i])
}

function notEqual(s1, s2){
  let arr1 = [...s1].sort().sort((a,b)=>a-b)
  let arr2 = [...s2].sort().sort((a,b)=>a-b)
  if (arr1.length!==arr2.length) return true
  return !arr1.every((v,i)=>v===arr2[i])
}
