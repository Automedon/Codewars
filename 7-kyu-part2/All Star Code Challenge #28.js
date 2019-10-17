/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #28

You've been annoyed by weather reports one time too many! Celsius...Fahrenheit...why don't they ever give both!?

Create a function called convertCF()/convert_c_f() (depending on language) that accepts 2 arguments, an integer of the temperature, and a string of length 1 ("c" or "f") denoting which scale the integer should be converted to (Celsius and Fahrenheit, respectively). The function should return a number, which is the conversion from one scale to the other.

By default, the conversion should convert to Celsius if a 2nd argument is not provided; in Python, Ruby and Crystal round up to the first digit.

convertCF(60, "f"); // => 140
convertCF(32, "c"); // => 0
convertCF(50); // => 10
convertCF(100, "w"); // => Error
Info on how to operate the conversion

Note: If the 2nd argument provided is NOT "c" or "f", an error (InvalidArgumentException in PHP) should be thrown. The conversion should work with negative numbers, too.
*/
function convertCF(num, scale){
  if (scale==='f') return num*9/5+32
  if (scale==='c') return (num-32)*5/9
  if (scale===undefined) return (num-32)*5/9
  throw new Error()
}
