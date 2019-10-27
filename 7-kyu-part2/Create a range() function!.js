/*
Description:
Your goal is to create a function called range().

It takes the follow parameters and returns an array(range of numbers):

start: starting point.
edge: ending point.
step: incrementing value.

for example:

range(0, 500, 50) => [0,50,100,150,200,250,300,350,400,450]
If the start or step is bigger or equals the edge: return empty array.

I will only provide non-negative integers. No need to check for null, undefined etc.
*/
function range(start, edge, step) {
  if (step > edge) return [];
  let arr = [];
  for (let i = start; i < edge; i += step) {
    arr.push(i);
  }
  return arr;
}
