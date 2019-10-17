/*
Description:
The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4); // should return [0,1,1,2]
fibonacci(-1); // should return []
*/
function fibonacci(n) {
 if (n<1) return [];
 if (n<2) return [0];
 let arr=[0,1];
 for (let i=2;i<n;i++){
 arr.push(arr[i-2]+arr[i-1])
 }
 return arr
}
