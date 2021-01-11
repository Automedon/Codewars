/*
Description:
Task
Write a function sortByBit which accepts an integer array as argument and returns a 32-bit integer such that the integer, in its binary representation has 1 at only those indexes(counted from right) which are in the array.

Examples
sortByBit([0, 1]) // Should give integer 3

sortByBit([1, 2, 0, 4]) 
// Should give integer 23

Because 23 in binary is:                     



  0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 1 1      
                                            . . . . . 5 4 3 2 1 0  <--- indices     
                                                        |   | | |                       
                                                        |   | | |                       
                                            these bits are 1 because the corresponding indices are in the given array

FAQA: The function name is sortByBit as it simulates radix sort
*/
const sortByBit = (arr) => arr.reduce((acc, value) => acc | (1 << value), 0)
