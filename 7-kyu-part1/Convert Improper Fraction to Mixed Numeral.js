/*
Description:
In Math, an improper fraction is a fraction where the numerator (the top number) is greater than or equal to the denominator (the bottom number) For example: 5/3 (five third).

A mixed numeral is a whole number and a fraction combined into one "mixed" number. For example: 1 1/2 (one and a half) is a mixed numeral.

Task
Write a function convertToMixedNumeral to convert the improper fraction into a mixed numeral.

The input will be given as a string (e.g. '4/3').

The output should be a string, with a space in between the whole number and the fraction (e.g. '1 1/3'). You do not need to reduce the result to its simplest form.

For the purpose of this exercise, there will be no 0, empty string or null input value. However, the input can be:

a negative fraction
a fraction that does not require conversion
a fraction that can be converted into a whole number
Example
convertToMixedNumeral('6/2') // '3'
convertToMixedNumeral('74/3') // '24 2/3'
convertToMixedNumeral('-504/26') // '-19 10/26'
convertToMixedNumeral('9/18') // '9/18'
*/
function convertToMixedNumeral(parm){
  let x = parm.split('/');
  let remain = x[0] % x[1];
  let div;
  x[0] < 0 ? div = Math.ceil(x[0] / x[1]) : div = Math.floor(x[0] / x[1]);

  if(remain == 0) return ''+div;
  if(div ==0) return remain+'/'+x[1];
  return div+' '+Math.abs(remain)+'/'+x[1];
}
