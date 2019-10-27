/*
Description:
Introduction
Digital Cypher assigns a unique number to each letter of the alphabet:

 a  b  c  d  e  f  g  h  i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y  z
 1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
In the encrypted word we write the corresponding numbers instead of the letters. For example, the word scout becomes:

 s  c  o  u  t
19  3 15 21 20
Then we add to each number a digit from the key (repeated if necessary). For example if the key is 1939:

   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21

   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8
Task
Write a function that accepts a message string and an array of integers code. As the result, return the key that was used to encrypt the message. The key has to be shortest of all possible keys that can be used to code the message: i.e. when the possible keys are 12 , 1212, 121212, your solution should return 12.

Input / Output:
The message is a string containing only lowercase letters.
The code is an array of positive integers.
The key output is a positive integer.
Examples
findTheKey("scout", [20, 12, 18, 30, 21]);  =>  1939
findTheKey("masterpiece", [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);  =>  1939 
findTheKey("nomoretears", [15, 17, 14, 17, 19, 7, 21, 7, 2, 20, 20]);  =>  12
Digital cypher series
Digital cypher vol 1
Digital cypher vol 2
Digital cypher vol 3 - missing key
*/
function findTheKey(message, code) {
  let arr = message.split``.map(v => v.charCodeAt() - 96);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = code[i % code.length] - arr[i];
  }

  return findSeq(arr) * 1;
}
function findSeq(arr) {
  let sequence = arr.join``;
  let result = "";
  function isSequence(sequence, substring) {
    for (let i = 0; i < sequence.length; i += 1) {
      if (sequence[i] !== substring[i % substring.length]) {
        return false;
      }
    }
    return true;
  }
  for (let i = 0; i < sequence.length; i += 1) {
    result += sequence[i];
    if (isSequence(sequence, result)) {
      return result;
    }
  }
  return result;
}
