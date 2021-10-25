/*
Description:
Introduction
 Little Petya very much likes sequences. However, recently he received a sequence as a gift from his mother.
 Petya didn't like it at all! He decided to make a single replacement. After this replacement, Petya would like to the sequence in increasing order.
 He asks himself: What is the lowest possible value I could have got after making the replacement and sorting the sequence?

About the replacement
 Choose exactly one element from the sequence and replace it with another integer > 0. You are not allowed to replace a number with itself, or to change no number at all.

Task
 Find the lowest possible sequence after performing a valid replacement, and sorting the sequence.

Input:
 Input contains sequence with N integers. All elements of the sequence > 0. The sequence will never be empty.

Output:
 Return sequence with N integers — which includes the lowest possible values of each sequence element, after the single replacement and sorting has been performed.

Examples:

([1,2,3,4,5])  =>  [1,1,2,3,4]
([4,2,1,3,5])  =>  [1,1,2,3,4]
([2,3,4,5,6])  =>  [1,2,3,4,5]
([2,2,2])      =>  [1,2,2]
([42])         =>  [1]
*/

function replacement(a){
  a.sort((a, b) => a - b).pop() == 1 ? a.push(2) : a.unshift(1);
  return a
}
