/*
Description:
Create the function running(lst, fn) with a list as first argument and a function as second argument, that iterates over the list and returns a second list with the accumulated results.

Example:

running(lst, fn) = [fn(lst[0]), fn(lst[0:1]), fn(lst[0:2]) ... fn(lst)]
running([1,1,1,1], add) = [1,2,3,4]
running([10,3,4,1], sub) = [10,7,3,2]
running([1,9,2,10], max) = [1,9,9,10]
running([1,9,2,10], min) = [1,1,1,1]
You don't have to validate the input values.
*/
function running(lst, fn) {
  return lst.map((v, i) => lst.slice(0, i + 1).reduce((a, b) => fn(a, b)));
}
