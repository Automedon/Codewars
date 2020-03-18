/*
Description:
Here's a way to construct a list containing every positive rational number:

Build a binary tree where each node is a rational and the root is 1/1, with the following rules for creating the nodes below:

The value of the left-hand node below a/b is a/a+b
The value of the right-hand node below a/b is a+b/b
So the tree will look like this:

                       1/1
                  /           \ 
            1/2                  2/1
           /    \              /     \
       1/3        3/2        2/3       3/1
      /   \      /   \      /   \     /   \
   1/4    4/3  3/5   5/2  2/5   5/3  3/4   4/1

 ...
Now traverse the tree, breadth first, to get a list of rationals.

[ 1/1, 1/2, 2/1, 1/3, 3/2, 2/3, 3/1, 1/4, 4/3, 3/5, 5/2, .. ]
Every positive rational will occur, in its reduced form, exactly once in the list, at a finite index.

In the kata, we will use tuples of type [ Number, Number ] to represent rationals, where [a,b] represents a / b

Use this method to create an infinite list of tuples:

function* allRationals() => [Number,Number] // forever
matching the list described above:

allRationals => [ [1,1], [1,2], [2,1], [1,3], [3,2], .. ]
*/
function* allRationals() {
  yield [1, 1];
  for (const [a, b] of allRationals()) {
    yield [a, a + b];
    yield [a + b, b];
  }
}
