/*
Description:
In this Kata, you will be given directions and your task will be to find your way back.

solve(["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]) = ['Begin on Road D', 'Right on Road C', 'Left on Road B', 'Left on Road A']
solve(['Begin on Lua Pkwy', 'Right on Sixth Alley', 'Right on 1st Cr']) =  ['Begin on 1st Cr', 'Left on Sixth Alley', 'Left on Lua Pkwy']
More examples in test cases.

Good luck!

Please also try Simple remove duplicates
*/
function solve(arr) {

  const map = { Begin: 'Begin', Left: 'Right', Right: 'Left' }
  ,   parts = arr.map(step => step.split(' on '))
  ,   steps = [];

  for (let i = 0; i < arr.length; i++)
    steps.unshift(map[parts[(i + 1) % arr.length][0]] + ' on ' + parts[i][1]);

  return steps;
}
