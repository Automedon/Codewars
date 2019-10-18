/*
Description:
Write a function groupIn10s which takes any number of arguments, and groups them into sets of 10s and sorts each group in ascending order.

The return value should be an array of arrays, so that numbers between 0-9 inclusive are in position 0 and numbers 10-19 are in position 1, etc.

Here's an example of the required output:

const grouped = groupIn10s(8, 12, 38, 3, 17, 19, 25, 35, 50) 

grouped[0]     // [3, 8]
grouped[1]     // [12, 17, 19]
grouped[2]     // [25]
grouped[3]     // [35, 38]
grouped[4]     // undefined
grouped[5]     // [50]
*/
function groupIn10s(...arr){
  arr=arr.sort((a,b)=>a-b)
  let arr2 = [];
  arr.map(x=> {
		let pos = arr2[Math.floor(x/10)];
		arr2[Math.floor(x/10)] = (pos) ? pos.concat(x) : [x]
	})
  return arr2
}
