/*
Description:
JavaScript has sparse arrays, in which not all of its elements are necessarily set. As a result, the length of a javascript array may be greater than the number of its elements. It would be useful to have an array method that checks whether or not an array is sparse.

The challenge here is to create such a method. Please remember that an element in an array can be set to anything including "null" and "undefined". Such elements are not considered sparse in JavaScript. One of the ways to make sparse arrays is for example by deleting some elements in a regular array, like in "delete array[i]", where i < array.length. Also remember that an empty array is not a sparse array by definition.
*/
Array.prototype.isSparse = function() {
   return this.length !== Object.keys(this).length;
}
