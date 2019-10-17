/*
Description:
Training JS #33:
methods of Math---max() min() and abs()

In this lesson we learn three methods of Math: max(), min() and abs().

Their definitions and detailed information:

Math.max()
Math.min()
Math.abs()
Their usage is very simple: for the given parameters, return the maximum value, minimum value and absolute value. Here we use some examples to understand their usage:

var a=1,b=2,c=-1
console.log(Math.max(a,b));  //output: 2
console.log(Math.min(a,b));  //output: 1
console.log(Math.abs(c));    //output: 1
abs() can has only one parameter, max() and min() can has more than one parameters. See example:

var a=1,b=2,c=-1
console.log(Math.max(a));      //output: 1
console.log(Math.max(a,b,c));  //output: 2
console.log(Math.min(a));      //output: 1
console.log(Math.min(a,b,c));  //output: -1
console.log(Math.abs(a));      //output: 1
console.log(Math.abs(a,b,c));  //output: 1
console.log(Math.abs(b,a,c));  //output: 2
console.log(Math.abs(c,b,a));  //output: 1
We can see: For max() and min(). If it has only one parameter, method returns the parameter itself; If it has many parameters, method will return the maximum / minimum values; For abs(). No matter how many parameters, it returns only the absolute value of the first parameter.

max() and min() can accept an array as a parameter by using spread operator (...). The following example is a classic usage, to calculate the maximum/minimum values of the array:

var arr=[1,2,3,4,5];
console.log(Math.max(...arr));  //output: 5
console.log(Math.min(...arr));  //output: 1
Ok, lesson is over. let's us do some task.

#Task
Coding in function ```maxMin```. function accept 2 parameter ```arr1``` and ```arr2```. They are two number array and have the same number of elements.

First, calculate the difference of the same index of the ```arr1``` and ```arr2```. Like this: 
```
[1,3,5]
 | | |   --->  8, 5, 2
[9,8,7]
```
Please note that the difference is positive. Such as the above 1 and 9, the difference should be 8, not -8. I think ```abs()``` can help you get the correct result ;-)

Then find the maximum and minimum values of them, and return the results in the form of an array. Like this:
```
  maxvalue , minvalue
[    8     ,    2     ]
```
Some examples:
```
maxMin([1,3,5],[9,8,7])               should return [8,2]
maxMin([1,10,100,1000],[0,0,0,0])     should return [1000,1]
maxMin([10,20,30,40],[111,11,1,-111]) should return [151,9]
```
*/
function maxMin(arr1,arr2){
  const arr=arr2.map((v,i)=>v-arr1[i],0)
  return [Math.max(...arr.map(v=>Math.abs(v))),Math.min(...arr.map(v=>Math.abs(v)))]
}
