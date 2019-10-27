/*
Description:
We need a function with the following signature:

getRandomInRange(min, max)

to return a random integer based on Math.random() in the (inclusive) range of min and max.
*/
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
