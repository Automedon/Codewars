/*
Task
In one city it is allowed to write words on the buildings walls. The local janitor, however, doesn't approve of it at all. Every night he vandalizes the writings by erasing all occurrences of some letter. Since the janitor is quite lazy, he wants to do this with just one swipe of his mop.

Given a word, find the minimum width of the mop required to erase each of the letters.

Input/Output
[input] string word

A word consisting of only lowercase English letters.

5 ≤ word.length ≤ 50

[output] an integer array

An array of length 26. The first element is the minimum width of the mop to erase letter 'a', the second - letter 'b' etc.

Example
For word = "abacaba", the output should be:

[7, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

(26 elements altogether)

First element 7 means: from first "a" to last "a" need a width of 7.

First element 5 means: from first "b" to last "b" need a width of 5.

First element 1 means: from first "c" to last "c" need a width of 1.
*/

const theJanitor = w => 'abcdefghijklmnopqrstuvwxyz'.split('').map( c => w.includes(c) - w.indexOf(c) + w.lastIndexOf(c) );
