/*
Description:
Training JS #25:
methods of arrayObject---reverse() and sort()

This lesson we learn two sorting methods: reverse() and sort().

reverse() has only one purpose: reverse the order of the elements. Usage is arrayObject.reverse() and don't need parameters. Example:

var arr1=[1,2,3,4,5]
arr1.reverse()
console.log(arr1)   //output: [ 5, 4, 3, 2, 1 ]
var arr2=['a','b','c']
arr2.reverse()
console.log(arr2)   //output: [ 'c', 'b', 'a' ]
Here we start to learn about the second methods of sorting: sort(). Its usage:

arrayObject.sort([compareFunction])
The parameter compareFunction is optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element. Example:

var arr=['c','a','b'];
arr.sort();
console.log(arr)   //output: [ 'a', 'b', 'c' ]
This is an example of an array of strings, if arr is a number array and the parameter is omitted, sort() will first convert the number into a string, and then sort the array. Example:

var arr=[1,2,3,11,21,31];
arr.sort();
console.log(arr)
//output:
[ 1, 11, 2, 21, 3, 31 ]
This result may not be what we want. If you want to sort the numbers according to the size of their values, you must use a parameter, the parameter is a function. A classic example:

var arr=[1,2,3,11,21,31];
arr.sort((a,b)=>a-b);   //ascending sort
console.log(arr)
//output: [ 1, 2, 3, 11, 21, 31 ]
arr.sort((a,b)=>b-a);   //descending sort
console.log(arr)
//output: [ 31, 21, 11, 3, 2, 1 ]
Usually this is the result we want. (a,b)=>a-b is arrow function. The formal format is: function(a,b){return a-b}. If you forget how to use the arrow function, please refer to:#22: Unlock new skills--Arrow function,spread operator and deconstruction

The principle of sorting is: (Text is too long, if you are not interested in reading please skip)

If compareFunction(a, b) is less than 0, 
sort a to the lower index than b, i.e. a comes first.
If compareFunction(a, b) returns 0,
leave a and b unchanged with respect to each other, 
but sorted with respect to all different elements.
If compareFunction(a, b) is greater than 0, 
sort b to the lower index than a.
compareFunction(a, b) must always return the same value
when given a specific pair of elements a and b as its two arguments. 
If inconsistent results are returned then the sort order is undefined.
If we need to sort by two or more conditions, we need to spend more energy to write a proper comparison function. The following example has two sorting conditions, first according to the classification of odd and even order, and then follow the numbers in ascending order.

var arr=[1,2,3,4,5,6,100,999]
arr.sort((a,b)=>{
  if (a%2==b%2) return a-b;
  if (a%2>b%2) return -1;
  return 1;
})
console.log(arr)

//output: [ 1, 3, 5, 999, 2, 4, 6, 100 ]
Need to pay attention to: reverse() and sort() will modify the original array.

Ok, lesson is over. let's us do some task.

#Task
Coding in function ```sortIt```. function accept 1  parameters ```arr```, it's a number array. Your task is to sort the array according to the specified conditions, and returns a new array(should not modify the original array).

conditions1: according to the number of elements(in ascending order)
for example:
```
sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
because [1,1,1,2,2,3] has one 3, two 2 and three 1
```
conditions2: If the same number of elements, according to the number values(in descending order)
for example:
```
sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
because number of 3,2 and 1 both are three, then according to 3>2>1
```
Comprehensive two conditions should be like this:
```
sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
```
*/
function sortIt(arr){
  return arr.slice().sort((a,b)=>{
  let countA = arr.filter(v=>v===a).length
  let countB = arr.filter(v=>v===b).length
  if (countA===countB){ return b-a}
  else if (countA>countB) {return 1}
  else { return -1}
  })
}
