/*
Description:
The Invitation
Most of us played with toy blocks growing up. It was fun and you learned stuff. So what else can you do but rise to the challenge when a 3-year old exclaims, "Look, I made a square!", then pointing to a pile of blocks, "Can you do it?"

These Blocks
Just to play along, of course we'll be viewing these blocks in two dimensions. Depth now being disregarded, it turns out the pile has four different sizes of block: 1x1, 1x2, 1x3, and 1x4. The smallest one represents the area of a square, the other three are rectangular, and all differ by their width. Integers matching these four widths are used to represent the blocks in the input.

This Square
Well, the kid made a 4x4 square from this pile, so you'll have to match that. Noticing the way they fit together, you realize the structure must be built in fours rows, one row at a time, where the blocks must be placed horizontally. With the known types of block, there are five types of row you could build:

1 four-unit block
1 three-unit block plus 1 one-unit bock (in either order)
2 two-unit blocks
1 two-unit block plus 2 one-unit blocks (in any order)
4 one-unit blocks
Amounts for all four of the block sizes in the pile will each vary from 0 to 16. The total size of the pile will also vary from 0 to 16. The order of rows is irrelevant. A valid square doesn't have to use up all the given blocks.

Some Examples
Given 1, 3, 2, 2, 4, 1, 1, 3, 1, 4, 2 there are many ways you could construct a square. Here are three possibilities, as described by their four rows:

1 four-unit block
2 two-unit blocks
1 four-unit block
4 one-unit blocks
1 three-unit block plus 1 one-unit block
2 two-unit blocks
1 four-unit block
1 one-unit block plus 1 three-unit block
2 two-unit blocks
1 three-unit block plus 1 one-unit block
1 four-unit block
2 one-unit blocks plus 1 two-unit block
Given 1, 3, 2, 4, 3, 3, 2 there is no way to complete the task, as you could only build three rows of the correct length. The kid will not be impressed.

2 two-unit blocks
1 three-unit block plus 1 one-unit block
1 four-unit block
(here only sadness)
Input
blocks ~ a random array of integers (1 <= x <= 4)
Output
true or false ~ whether you can build a square
Enjoy!
If interested, I also have this kata as well as this other kata to consider solving.
*/
function buildSquare(blocks) {
  const dict = blocks.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  let win = 0;
  let arr = [4,3,2,1];
  arr.map(i=>{
    if (i==4){
      while (dict[4]){
        dict[4]-=1
        win+=1
      }
    } 
    if (i==3){
      while (dict[3]&&dict[1]){
        dict[1]-=1
        dict[3]-=1
        win+=1
      }
    }
    if (i==2){
      while (dict[2]>=2){
        dict[2]-=2
        win+=1
      }
    }
    if (i==2){
      while (dict[1]>=2&&dict[2]){
        dict[1]-=2
        dict[2]-=1
        win+=1
      }
    }
    if (i==1){
      while (dict[1]>=4){
        dict[1]-=4 
        win+=1
      }
    }
  })
  return win>=4
}
