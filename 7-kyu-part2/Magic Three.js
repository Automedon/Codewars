/*
In this Kata, you have to write a function that will accept an array of numbers, in which you will need to check whether any combination of 3 numbers sum to 0. 
You are allowed to use a number more than once, as long as you use only 3 numbers total (e.g. 0+0+1 ).

If a value of 0 is possible return true.
Otherwise, if there is no possible combination of 3 numbers that sum to 0 return false.

Examples
For example let's take the array [ -10, 4, 5, 7, 3 ]. There is a possible combination that sums to 0 => -10 + 7 + 3 = 0. 
Therefore, passing this array to our function should return true.

Another example: the array [0] has one number but there still is a possible combination that will result in 0 => 0 + 0 + 0. The result is true.

Finally, the array [1,4,2,-9] doesn't have any combination of 3 numbers that sum to 0 and therefore should return false.

Go get em!
*/
function isMagicThree(array) {
  for(let x of array)
    for(let y of array)
      for(let z of array)
        if(x + y + z === 0) return true;
  return false;
}
