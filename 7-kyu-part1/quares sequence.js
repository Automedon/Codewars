/*
Description:
Create a function squares(x,n) that starts with a number (x) and returns an array of length (n) with squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
squares(2,5)=[2,4,16,256,65536]
squares(3,3)=[3,9,81]
*/

function squares(x, n) {
  if (n <= 0) return [];
  let arr = [x];
  for (let i = 0; i < n - 1; i++) {
    arr.push(Math.pow(arr[i], 2));
  }

  return arr;
}
