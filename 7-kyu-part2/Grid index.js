/*
Description:
You are given an n by n ( square ) grid of characters, for example:

[['m', 'y', 'e'], 
 ['x', 'a', 'm'], 
 ['p', 'l', 'e']]
You are also given a list of integers as input, for example:

[1, 3, 5, 8]
You have to find the characters in these indexes of the grid if you think of the indexes as:

[[1, 2, 3], 
 [4, 5, 6], 
 [7, 8, 9]]
Remember that the indexes start from one and not zero.

Then you output a string like this:

"meal"
All inputs will be valid.
*/
function gridIndex(grid, indices) {
  let str = "";
  grid = "0" + grid.map((v) => v.join``).join``;
  indices.map((v) => (str += grid[v]));
  return str;
}
