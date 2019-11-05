/*
Description:
Consider the following series:

1, 2, 4, 8, 16, 22, 26, 38, 62, 74, 102, 104, 108, 116, 122

It is generated as follows:

For single digit integers, add the number to itself to get the next element.
For other integers, multiply all the non-zero digits and add the result to the original number to get the next element.
For example: 16 + (6 * 1) = 22 and 104 + (4 * 1) = 108.

Let's begin the same series with a seed value of 3 instead of 1:

3, 6, 12, 14, 18, 26, 38, 62, 74, 102, 104, 108, 116, 122

Notice that the two sequences converge at 26 and are identical therefter. We will call the series seeded by a value of 1 the "base series" and the other series the "test series".

You will be given a seed value for the test series and your task will be to return the number of integers that have to be generated in the test series before it converges to the base series. In the case above:

convergence(3) = 5, the length of [3, 6, 12, 14, 18]. 
Good luck!

If you like this Kata, please try:
*/
let k = 1
let arr1 = []
for (let j=0;j<1000;j++){
    arr1.push(k=k+k.toString().replace(/0/g,'').split``.reduce((a,b)=>a*b,1))
}
function convergence(n){
  let i = 0
  while (!arr1.includes(n)&&i<1000){
    i++
    n=n+n.toString().replace(/0/g,'').split``.reduce((a,b)=>a*b,1)
    }
  return i
}
