/*
Description:
#Description Your task is to implement our beloved Array.prototype.map function from a scratch, and yes, it has to be inside the Array's prototype. Don't know what a 'prototype' is? This could help you a little as well as this kata.

Moving on, the defaults for Array.prototype.map, Array.prototype.reduce, Array.prototype.reduceRight and Array.prototype.forEach will be banned, in other words you'll have to create map from scratch.

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var multiply_by_two = function(x) { return x * 2 };
var one_to_nine_doubled = one_to_nine.map(multiply_by_two);
// Expected
[2, 4, 6, 8, 10, 12, 16, 18]
#What do I want? I want you to create this basic, yet, really important algorithm from scratch by yourself.

The Basics

Array.prototype.map is a function that takes a callback function and an object as 'context'
The callback function should receive the current item, it's index and array object itself
The context will be this inside the callback function
NOTE

You should take into account that an array created by [] and a new Array(length) are entirely different on the content they posses and you should take into account that at the moment of building your solution.
A better illustration for that:
[1, 2, 3]; // { '0': 1, '1': 2, '2': 3, length: 3 }
new Array(3); // { length: 3 }

[1, 2, 3].concat([4]); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
new Array(3).concat([4]); // { '3': 4, length: 4 }
That said, you should only apply the callback function to the items that the array posses
That said, Have a happy Coding.

#Oh, I almost forgot Your implementation for this map function should not modify the current array

var base_array = [1, 2, 3, 4, 5];
var mapped_array = base_array.map(function(item) { return item + 2 });

console.log(base_array); // [1, 2, 3, 4, 5]
console.log(mapped_array); // [3, 4, 5, 6, 7]
*/
Array.prototype.map = function (cb,context){
  const length = this.length
  const arr = new Array(length)
  for (let i=0;i<length;i++){
    if (i in this){
      arr[i]=cb.call(context,this[i],i,this)
    }
  }
  return arr
}
