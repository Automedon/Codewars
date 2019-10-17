/*
Description:
Hexadecimal
Write a program that will convert a hexadecimal number, represented as a string (e.g. "10af8c"), to its decimal equivalent.

The program should return -1 for invalid hexadecimal strings.

Source
All of Computer Science http://www.wolframalpha.com/examples/NumberBases.html
*/
function hexToDec(hexadecimal) {
  if (parseInt(hexadecimal,16).toString(16) == hexadecimal) return  parseInt(hexadecimal,16) 
  return -1;
}
