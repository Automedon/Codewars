/*
Description:
Implement the uniq() function which behaves like the uniq command in UNIX. It takes as input an array and returns an array in which all duplicate elements following each other have been reduced to one instance.

Example:

var input = ['a','a','b','b','c','a','b','c'];
uniq(input); // -> returns ['a','b','c','a','b','c']
*/
function uniq(a) {
  for (let i=0;i<a.length-1;i++){
    if (a[i]===a[i+1]){
      a.splice(i,1)
      i--
    }
  }
  return a
}
