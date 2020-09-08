/*
Description:
Uh oh, Someone at the office has dropped all these sequences on the floor and forgotten to label them with their correct bases.

We have to fix this before the boss gets back or we're all going to be fired!

This is what your years of coding have been leading up to, now is your time to shine!

Task
You will have to create a function which takes in a sequence of numbers in random order and you will have to return the correct base of those numbers.

The base is the number of unique digits. For example, a base 10 number can have 10 unique digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and a base 2 number (Binary) can have 2 unique digits: 0 and 1.

Constraints
The sequence will always be 10 numbers long and we know that the base is going to be between 2 and 10 inclusive so no need to worry about any letters. When sorted, the sequence is made up of consecutive numbers.

Examples
[ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]     -->  10
[ "1", "2", "3", "4", "5", "6", "10", "11", "12", "13" ]  -->   7
Good luck!
*/
function baseFinder(seq){
  return new Set(seq.join``).size;
}
