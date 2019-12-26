/*
Description:
Leonardo Fibonacci in a rare portrait of his younger days

I assume you are all familiar with the famous Fibonacci sequence, having to get each number as the sum of the previous two (and typically starting with either [0,1] or [1,1] as the first numbers).

While there are plenty of variation on it (including a few I wrote), usually the catch is all the same: get a starting (signature) list of numbers, then proceed creating more with the given rules.

What if you were to get to get two parameters, one with the signature (starting value) and the other with the number you need to sum at each iteration to obtain the next one?

And there you have it, getting 3 parameters:

a signature of length length
a second parameter is a list/array of indexes of the last length elements you need to use to obtain the next item in the sequence (consider you can end up not using a few or summing the same number multiple times)' in other words, if you get a signature of length 5 and [1,4,2] as indexes, at each iteration you generate the next number by summing the 2nd, 5th and 3rd element (the ones with indexes [1,4,2]) of the last 5 numbers
a third and final parameter is of course which sequence element you need to return (starting from zero, I don't want to bother you with adding/removing 1s or just coping with the fact that after years on CodeWars we all count as computers do):
customFib([1,1],[0,1],2) === 2 //classical fibonacci!
customFib([1,1],[0,1],3) === 3 //classical fibonacci!
customFib([1,1],[0,1],4) === 5 //classical fibonacci!
customFib([3,5,2],[0,1,2],4) === 17 //similar to my Tribonacci
customFib([7,3,4,1],[1,1],6) === 2 //can you figure out how it worked ;)?
*/
function customFib(signature,indexes,n){
    let i = 0
    while (i < n) {
      let sum = 0;
      for (let j = 0; j < indexes.length; j++){
          sum+= signature[indexes[j]+i];
          }
          signature.push(sum);
          i++;
  }
  return signature[n];
}
