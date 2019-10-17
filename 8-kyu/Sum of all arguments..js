/*
Description:
Calculate the sum of all the arguments passed to a function.

Note: If any of the arguments is not a finite number the function should return false/False instead of the sum of the arguments.

For example:

sum(1,2,3,4)         should return 10
sum(1, "two", 3)     should return false
sum(1, 2, [3], NaN)  should return false
*/
function sum(...x){
  if (x.every(v=>typeof v=== 'number' && !isNaN(v)))
  return x.reduce((a,b)=>a+b,0)
  else return false
}
