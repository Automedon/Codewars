/*
Duplicate
Given an array of integers, find if the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.

Concepts
Nested Loops, Linear Search
*/
function existsDuplicate(numbers){
    return !(numbers.length===[...new Set(numbers)].length)
}
