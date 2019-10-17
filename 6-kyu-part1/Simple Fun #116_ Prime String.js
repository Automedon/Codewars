/*
Description:
Task
The string is called prime if it cannot be constructed by concatenating some (more than one) equal strings together.

For example, "abac" is prime, but "xyxy" is not("xyxy"="xy"+"xy").

Given a string determine if it is prime or not.

Input/Output
[input] string s

string containing only lowercase English letters

[output] a boolean value

true if the string is prime, false otherwise
*/
function primeString(s) {
  let arr = [];
  for (let i=1;i<s.length-1;i++){
    let str = ''
    while (str.length<=s.length){
      str+=s.slice(0,i)
      if (str===s) return false
    }
  }
  return true
}
