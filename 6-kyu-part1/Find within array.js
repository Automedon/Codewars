/*
Description:
Let's make an advanced version of Array.indexOf. We'll create a function that takes in two parameters:

an array (length and types of items are irrelevant), and
a function (value, index) that will be called on members of the array. The function will return either true or false.
Your function will iterate through the members of the array in order until the provided iterator function returns true; at which point your function will return that item's index.

If the iterator function returns false for all members of the array, your function should return -1.


*/
var findInArray = function(array, iterator) {
  return array.map((v, i) => iterator(v, i)).indexOf(true);
};
