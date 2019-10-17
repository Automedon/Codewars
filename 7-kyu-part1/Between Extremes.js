/*
Description:
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements.
*/


function betweenExtremes(numbers) {
    let sorted=numbers.sort((a,b)=>a-b)
   return Math.abs((sorted[sorted.length-1]-sorted[0]))
}
