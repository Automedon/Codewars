/*
Description:
Story
It's a pretty relaxing life here at the nut farm.

Most of the time we just sit around looking at our nuts.

But once a year comes harvesting time...

Harvesting nuts is very easy. We just shake the trees and the nuts fall out!

As they fall down the nuts might hit branches:

Sometimes they bounce left.
Sometimes they bounce right.
Sometimes they get stuck in the tree and don't fall out at all.
Legend
o = a nut
\ = branch. A nut hitting this branch bounces right
/ = branch. A nut hitting this branch bounces left
_ = branch. A nut hitting this branch gets stuck in the tree
. = leaves, which have no effect on falling nuts
| = tree trunk, which has no effect on falling nuts
= empty space, which has no effect on falling nuts
Kata Task
Shake the tree and count where the nuts land.

Output - An array (same width as the tree) which indicates how many nuts fell at each position ^

^ See the example tests

Notes
The nuts are always found at the top of the tree
Nuts do not affect the falling patterns of other nuts
There are always enough spaces for nuts to fall between branches
There are no branches at the extreme left/right edges of the tree matrix so it is not possible for a nut to fall "out of bounds"
Example
.o.oooooo.o.o.oooooo.
..\.\.../..\.../..\..
..../..\..../....../.
.....\...././.\..\.\.
...../../././...\....
.../.../..\./.\..\...
./.......\../.\../...
....\..../....././...
.../.\._.\../._../.\.
.\...././....\../.\..
./......././.../../..
            
            
            
            
            
            
101005000020000000040
*/
var shakeTree = function(tree) {
  let top = tree[0].map(v => (v === "o" ? 1 : 0));
  for (let i = 1; i < tree.length; i++) {
    for (let j = 0; j < tree[i].length; j++) {
      if (tree[i][j] === `\\` && top[j] > 0) {
        top[j + 1] += top[j];
        top[j] = 0;
      }
      if (tree[i][j] === `/` && top[j] > 0) {
        top[j - 1] += top[j];
        top[j] = 0;
      }
      if (tree[i][j] === `_`) {
        top[j] = 0;
      }
    }
  }
  return top;
};
