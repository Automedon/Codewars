/*
Description:
You need to write a function, that returns the first non-repeated character in the given string.

For example for string "test" function should return 'e'.
For string "teeter" function should return 'r'.

If a string contains all unique characters, then return just the first character of the string.
Example: for input "trend" function should return 't'

You can assume, that the input string has always non-zero length.

If there is no repeating character, return null in JS or Java, and None in Python.
*/
function firstNonRepeated(s) {
  let dict = s.split``.reduce((a,b)=>(a[b]=a[b]?a[b]+1:1,a),{})
  for (let i=0;i<s.length;i++){
    if (dict[s[i]]===1){
      return s[i]
    }
  }
  return null
}
