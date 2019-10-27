/*
Description:
The method below, is the most simple string search algorithm. It will find the first occurrence of a word in a text string.

haystack = the whole text

needle = searchword

wildcard = _

find("strike", "i will strike down upon thee"); // return 7
The find method is already made.

The problem is to implement wildcard(s) in the needle. If you have a _ in the needle it will match any character in the haystack.

A normal string search algorithm will find the first occurrence of a word(needle) in a text(haystack), starting on index 0. Like this:

find("strike", "I will strike down upon thee"); return 7
A wildcard in the needle will match any character in the haystack. The method should work on any types of needle, and haystasks. You can assume the needle is shorter than(or equal to) the haystack.

find("g__d", "That's the good thing about being president"); // return 11
If no match the method should return -1
*/
function find(needle, haystack) {
  return haystack.search(RegExp(`${needle.replace(/[^a-z0-9\.,-]/gi, ".")}`));
}
