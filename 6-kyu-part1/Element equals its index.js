/*
Description:
Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
Return -1 if there is no such index.

Your algorithm should be very performant.

[input] array of integers ( with 0-based nonnegative indexing )
[output] integer

Examples:
input: [-8,0,2,5]
output: 2 # since array[2] == 2

input: [-1,0,3,6]
output: -1 # since no index in array satisfies array[index] == index
Random Tests Constraints:
Array length: 200 000

Amount of tests: 1 000

Time limit: 150 ms

If you liked this Kata check out my more complex creations:

Find the neighbourhood in big dimensions. Neighbourhood collection

The Rubik's cube
*/
const indexEqualsValue=(a)=>{
  let i = 0
  while(a[i+100000] < 0) i+=100000
  while(a[i+10000] < 0) i+=10000
  while(a[i+1000] < 0) i+=1000
  while(a[i+100] < 0) i+=100
  while(a[i+10] < 0) i+=10
  while(a[i] < 0) i++
  while(a[i+10000] < i+10000) i+=10000
  while(a[i+1000] < i+1000) i+=1000
  while(a[i+100] < i+100) i+=100
  while(a[i+10] < i+10) i+=10
  while(a[i] < i) i++
  return a[i] === i ? +i : -1
}
