/*
Description:
Write a function printValues(n) that returns an array of all the numbers from 1 to n, with two exceptions:

For numbers divisible by 7, print "Code" instead of the number
and for numbers divisible by 5, print "Wars" instead.
("CodeWars" should be added to the array for numbers divisible by 7 and 5)

Example:
printValues(0)  // -> []
printValues(10) // -> [1,2,3,4,'Wars',6,'Code',8,9,'Wars']
*/
function printValues(n){
  let arr = [];
  for (let i=1;i<=n;i++){
    if (i%5===0&&i%7===0) arr.push("CodeWars")
    else if (i%5===0) arr.push("Wars")
    else if (i%7===0) arr.push("Code")
    else arr.push(i)
  }
  return arr
}
