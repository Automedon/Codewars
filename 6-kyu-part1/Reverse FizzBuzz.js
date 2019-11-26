/*
Description:
FizzBuzz is often one of the first programming puzzle people learn. Now undo it with reverse FizzBuzz!

Write a function that accepts a string, which will always be a valid section of FizzBuzz. Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

Notes:

If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
All numbers in the sequence will be greater than zero.
You will never receive an empty sequence.
Examples
reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]

*/
function reverseFizzBuzz(s) {
  if (s==='Fizz Buzz') return [9, 10]
  if (s==='Buzz Fizz') return [5, 6]
  if (s==='Fizz') return [3]
  if (s==='Buzz') return [5]
  if (s==='FizzBuzz') return [15]
  let a = s.split` `
  let k=0;
  for (let i=0;i<a.length;i++){
    if (a[i]==a[i]*1&&k===0) k=a[i]
    if (k) a[i]=k++
  }
  k=0
  a=a.reverse()
  for (let i=0;i<a.length;i++){
    if (a[i]==a[i]*1&&k===0) k=a[i]
    if (k) a[i]=k--
  }
  a=a.reverse()
  return a
}
