/*
Description:
#'x' marks the spot

##Task:

Given a two dimensional array, return the co-ordinates of 'x'.

The co-ordinates should be zero indexed.

You should assume you will always get an array as input.

Example test cases:

'Return an empty array if input is an empty array' => []

[] 

'Return an empty array if no x found' => []

[
  ['o', 'o'],
  ['o', 'o']
]

'Return an empty array if more than one x found' => []

[
  ['x', 'o'],
  ['o', 'x']
]

'Return [0,0] when x at top left' => [0, 0]

[
  ['x', 'o'],
  ['o', 'o']
]

'Return [4,6] for the example below' => [4, 6]

[
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]

'Return [4,6] for the example below' => [4, 6] 

[
  ['t', 't', 't', 'o', 'o', 'o', '~', 'o'],
  ['o', 'r', 'o', 'o', 'o', 'o', 't', 'o'],
  ['o', 'o', 'o', 's', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'c', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'a', 'a', 'a', 'o', 'x', 'o'],
  ['d', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
*/
const xMarksTheSpot = input => {
  let count = 0;
  let x = 0;
  let y = 0;
  input.map((v, i) => {
    if (v.includes("x")) {
      v.map((x, i) => (x === "x" ? (y = i) : v));
      count++;
      x = i;
    } else return v;
  });
  return count === 0 ? [] : count > 1 ? [] : [x, y];
};
