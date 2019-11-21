/*
Description:
Your task is to write a function which cuts cancer cells from the body.

Cancer cells are divided into two types:
Advance stage,described as letter C
Initial stage,described as letter c
Rest cells are divided as follows:

Normal cell,described as lowercase letter
Important cell,described as uppercase letter
Prerequisites:
Important cell,cannot be cut out.
Advance cancer cell,should be cut out with adjacent cells if it can be done.
Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.
*/
function cutCancerCells(organism){
  let a = organism.slice().split``
  for (let i=0;i<a.length;i++){
    if (a[i]==='c'){
      a[i]='*'
      i=0
    } else if (a[i]==='C'){
      if (a[i-1]&&a[i-1]===a[i-1].toUpperCase()){}
      else {a[i-1]='*'}
      a[i]='*'
      if (a[i+1]&&a[i+1]===a[i+1].toUpperCase()){}
      else {a[i+1]='*'}
      i=0
    }
  }
  return a.filter(v=>v!=='*').join``
}
