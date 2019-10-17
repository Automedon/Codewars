/*
Description:
At this point, you have probably done iterating array elements and adding them to get a sum:

For instance, the sum of [1,2,3] is 6. Easy enough!

But now, let's spice our problem with jagged arrays.

Suppose we are given this 'jagged' array: [[0],[1,2],[[3],[4,5]]]. Your task is the same: to find the sum of all numbers. In this example of jagged array, sum is 15.

Now, write a function that will take a 'jagged' array.
It should return the sum of all numbers.

Assume that the input is well-behaved; meaning, all you will see are integers and either [ or ].

TRY NOT TO PARSE, STRINGIFY, OR USE ANY ARRAY METHODS (array.length is ok)
*/
function sumJaggedArray(array){
  return array.toString().match(/[0-9]+/g).reduce((a,b)=>a+b*1,0)
}
