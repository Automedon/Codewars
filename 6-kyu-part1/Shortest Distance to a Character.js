/*
Description:
Given a string S and a character C, return an array of integers representing the shortest distance from the current character in S to C.

Notes
All letters will be lowercase.
If the string is empty, return an empty array.
If the character is not present, return an empty array.
Examples
shortesttoChar("lovecodewars", "e") === [3, 2, 1, 0, 1, 2, 1, 0, 1, 2, 3, 4]
shortesttoChar("aaaabbbb", "b") === [4, 3, 2, 1, 0, 0, 0, 0]
shortesttoChar("", "b") === []
shortesttoChar("abcde", "") === []
If you liked it, please rate :D
*/
function shortesttoChar(S,C){
  if (!S||!C||S.indexOf(C)===-1) return []
  let a = S.split``
  for (let i=0;i<a.length;i++){
    for (let j=0;j<a.length;j++){
      if (a[j]===C) a[j]=i
      if (a[j+1]===i-1&&typeof a[j]==='string'){ a[j]=i
      }
      if (a[j]===i-1&&typeof a[j+1]==='string'){ a[j+1]=i
      }
    }
  }
  return a
}
