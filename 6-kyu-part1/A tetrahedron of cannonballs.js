/*
Description:
Previously on Codewars...

"Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
In the Triangular Treasure kata you need to return the nth triangular number."

(If you haven't solved Triangular Treasure go solve it, cause you are going to need the solution here)

Now, in this kata...

The triangular number you just calculated is going to be the base of our "brand new" tetrahedral stack.

You need to calculate the number of cannonballs that can be stacked to form a regular tetrahedron with the given edge's length.

A regular tetrahedron is a platonic solid composed of triangular faces with all the edges having the same length. *** Please note, this is not a square pyramid, but a triangular one

For our problem, we are going to consider that the length of the edge is the number of cannonballs that can be lined up along one edge. *** Please note, we are not talking about volume here, we are talking about stacking spheres.

So. Given an edge with length = 1, the number of cannonballs contained in the base triangle (the triangular number) will be 1, and the number of cannonballs you would be able to stack in a regular tetrahedron will be 1.

The table for the series is this:

(edge's length -> triangular number -> "cannonball number")

 1 ->   1 ->    1
 2 ->   3 ->    4
 3 ->   6 ->   10
 4 ->  10 ->   20
 5 ->  15 ->   35
 6 ->  21 ->   56
 7 ->  28 ->   84
 8 ->  36 ->  120
 9 ->  45 ->  165
10 ->  55 ->  220
11 ->  66 ->  286
12 ->  78 ->  364
13 ->  91 ->  455
14 -> 105 ->  560
15 -> 120 ->  680
16 -> 136 ->  816
17 -> 153 ->  969
18 -> 171 -> 1140
19 -> 190 -> 1330
20 -> 210 -> 1540 
You can see some properties here:

The nth triangular number is: t(n) = n + t(n-1)
The nth cannonball number is: c(n) = t(n) + c(n-1)
Hint: Remember that, even though, we are talking about tetrahedrons the key number here is not 4 but 3.

*** Please, don't worry about the parameters. You will only receive positive integers.
*/
function tetrahedron(size) {
  return size*(size + 1)*(size + 2)/6
}
