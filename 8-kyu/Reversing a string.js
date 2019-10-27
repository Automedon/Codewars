/*
Create a function that will reverse a string.

You might have to convert the string into an array first before you are able to reverse it.

Your final answer must also be a string.

Some functions you might find useful to solve this problem are: String.split() Array.reverse() Array.join()
*/
function reverseString(str) {
  return [...str].reverse().join``;
}
