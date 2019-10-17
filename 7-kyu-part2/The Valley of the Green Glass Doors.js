/*
Description:
Welcome to the Valley of the Green Glass Doors. There are a variety of objects here, but they all follow a certain rule. For instance, in the Valley of the Green Glass Doors, there are feet but no legs, trees but no leaves, and screens but no movies.

Your job is to write an algorithm that correctly tells whether or not an object is in the valley. You will be given a single-word string, and must return "true" if the object is present, and "false" if it is not. You do not need to worry about empty strings. For example:

inTheValley('feet'); // returns true
inTheValley('legs'); // returns false
Note: The Valley of the Green Glass Doors is a very popular puzzle, and you will find the solution to it with just a little bit of googling. See if you can figure it out on your own, but don't spend too long on it.
*/
function inTheValley(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) return true;
  }
  return false;
}
