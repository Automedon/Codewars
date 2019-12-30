/*
Description:
Remember the game 2048? http://gabrielecirulli.github.io/2048/

The main part of this game is merging identical tiles in a row.

Implement a function that models the process of merging all of the tile values in a single row.
This function takes the array line as a parameter and returns a new array with the tile values from line slid towards the front of the array (index 0) and merged.
A given tile can only merge once.
Empty grid squares are represented as zeros.
Your function should work on arrays containing arbitrary number of elements.
Examples
merge([2,0,2,2])  -->  [4,2,0,0]
Another example with repeated merges:

merge([4,4,8,16])  -->  [8,8,16,0]
merge([8,8,16,0])  -->  [16,16,0,0]
merge([16,16,0,0]) -->  [32,0,0,0]
*/
function merge(line) {
  let arr = line.filter(a=>a)
  let answer = []
  for (let i=0;i<line.length;i++){
        if (arr[i] === arr[i+1]) answer.push(arr[i++]*2);
        else answer.push(arr[i]); 
  }
  return line.map((v,i)=>answer[i]||0)
};
