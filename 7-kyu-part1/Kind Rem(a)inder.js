/*
Description:
Write a function that will receive three arguments. The first two will always be arrays consisting of integers, the third one will be a string of letters. The lengths of the first two arrays will be equal, and the integers will always be positive.

You function should divide the first integer of the first array by the first one of the second array to find the remainder and then do the same with the second pair of integers, etc. If the biggest remainder of all found is an even number, the function should return the string in minuscule (small letters). Otherwise, the function should return the string in majuscule (capital letters).

Example:

function([16, 16], [10, 5], 'Doctor') should return 'doctor', because:

the remainder of the first pair of integers (16 divided by 10) is 6;

the remainder of the second pair is 1;

the biggest remainder found is 6, and since 6 is an even number --> the string is returned in minuscule.
*/

function kira(a, b, z) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(a[i] % b[i]);
  }
  return Math.max(...arr) % 2 == 0 ? z.toLowerCase() : z.toUpperCase();
}
