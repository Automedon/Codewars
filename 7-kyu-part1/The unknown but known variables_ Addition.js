/*
Description:
This should be fairly simple. It is more of a puzzle than a programming problem.

There will be a string input in this format: 'a+b' 2 lower case letters (a-z) seperated by a '+'

Return the sum of the two variables.

There is one correct answer for a pair of variables.

I know the answers, it is your task to find out.

Once you crack the code for one or two of the pairs, you will have the answer for the rest.

It is like when you were in school doing math and you saw "11 = c+h" and you needed to find out what c and h were.

However you don't have an 11. You have an unknown there as well. Example:

X = a+b.

You don't know what X is, and you don't know what b is or a, but it is a puzzle and you will find out.

As part of this puzzle, there is three hints or clues on solving this. I won't tell you what the other two are, but one of them is: Don't overthink it. It is a simple solution

Given the input as a string - Return the sum of the two variables as int.
*/
function theVar(theVariables) {
  return theVariables.split('+').map(v=>v.charCodeAt()-96).reduce((a,b)=>a+b,0);
}
