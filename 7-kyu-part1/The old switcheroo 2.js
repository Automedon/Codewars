/*
Description:
This is a follow up from my kata The old switcheroo

Write

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase()
*/

function encode(str) {
  return str.split('').map(v=>/[a-z]/gi.test(v)?v.toLowerCase().charCodeAt()-96:v).join('')
}
