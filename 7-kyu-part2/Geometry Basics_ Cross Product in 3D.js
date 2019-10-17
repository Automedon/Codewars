/*
Description:
This series of katas will introduce you to basics of doing geometry with computers.

Vector objects (struct in C) have x, y, and z attributes.

Write a function calculating cross product of Vector a and Vector b.

You can read more about cross product on Wikipedia.

Tests round answers to 6 decimal places.
*/
function crossProduct(v1, v2) {
let x = v1.y*v2.z-v1.z*v2.y;
let y = v1.z*v2.x-v1.x*v2.z;
let z = v1.x*v2.y-v1.y*v2.x;
return new Vector(x,y,z);
}
