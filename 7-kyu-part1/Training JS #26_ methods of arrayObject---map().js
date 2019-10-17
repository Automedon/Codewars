/*
Description:
Training JS #26:
methods of arrayObject---map()

This lesson we learn a very useful method of array: map(). The map() method creates a new array with the results of calling a provided function on every element in this array. This method can make people lazy ;-) because it can significantly reduce the amount of code input. For more information, please refer to: Array.prototype.map()

Here are some examples to help us understand the use of map():

This example calculates the square root of each element:

//example1: Direct use of the existing function
var a=[1,4,9,16]
var b=a.map(Math.sqrt)
console.log(a)   //output: [ 1, 4, 9, 16 ]
console.log(b)   //output: [ 1, 2, 3, 4 ]
This example increases the value of each element by 1:

//example2: Using simple custom functions
var a=[1,2,3,4]
var b=a.map(x=>x+1)
console.log(a)   //output: [ 1, 2, 3, 4 ]
console.log(b)   //output: [ 2, 3, 4, 5 ]
This example will take the index of the array as a value:

var a=[...Array(4)]
var b=a.map((_,i)=>i)
var c=[...Array(4)].map((_,i)=>i)  
var d=Array.prototype.map.call(a,(_,i)=>i)
console.log(a)   //output: [ undefined, undefined, undefined, undefined ]
console.log(b)   //output: [ 0, 1, 2, 3 ]
console.log(c)   //output: [ 0, 1, 2, 3 ]
console.log(d)   //output: [ 0, 1, 2, 3 ]
In this example, a is an initialized array, we can see that the value of all the elements is undefined. b c d is the three different form, using the map() method to assign each element to the index of the element. Need to pay attention to is that this time the map method uses two parameters, the first argument represents the element itself, the second parameter represents the index of elements, we only use the second parameter, but first parameter can not be omitted, so we use the underscore (also with other characters, use the underscore is just to let the reader know this argument is not used).

The following example is the simulation of the reverse method, which uses three parameters, the third parameter represents the array itself:

var a=[2,4,6,8]
var b=a.map((_,i,arr)=>arr[arr.length-1-i])
console.log(a)   //output: [ 2, 4, 6, 8 ]
console.log(b)   //output: [ 8, 6, 4, 2 ]
Ok, lesson is over. let's us do some task.

#Task
Coding in function ```isolateIt```. function accept 1  parameters ```arr```, it's a string array. Your task is to put a character "|" into the middle of each element. 

If the string length is an even number, use the insert method. for example: ```"abcd"``` should became ```"ab|cd"```. ```"|"``` should be inserted between ```ab``` and ```cd```.

If the string length is an odd number, use the replacement method. for example: ```"abcde"``` should became ```"ab|de"```. Character ```c``` will be replaced by ```|```.

The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

Some example:
```
isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
isolateIt(["1234","56789"]) should return ["12|34","56|89"]
```

a little hint: Flexible use of ```slice()``` Will make the work more simple.
*/
function isolateIt(arr) {
  return arr.map(v => {
    if (v.length % 2 == 0) {
      return v.slice(0, v.length / 2) + "|" + v.slice(v.length / 2);
    }
    if (v.length % 2 !== 0) {
      return v.slice(0, v.length / 2) + "|" + v.slice(v.length / 2 + 1);
    }
  });
}
