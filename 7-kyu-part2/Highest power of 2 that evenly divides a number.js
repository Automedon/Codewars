/*
Write a function that takes a number and returns highest power of 2 that evenly divides the number.

For example:

  solution( 123 ) should return 1
  solution( 192 ) => 64
  solution( 132232 ) => 8
  solution( 123 ) should return 1
  solution( 192 ) => 64
  solution( 132232 ) => 8
Assume that: number is an integer within the range [1..10^18].
*/
const solution = n =>{
  let count=0
  for (let i=1;i<=n;i*=2){
  if (n%i===0) count=i
  }
  return count
}
