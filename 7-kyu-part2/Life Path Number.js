/*
Description:
A person's Life Path Number is calculated by adding each individual number in that person's date of birth, untill it is reduced to a single digit number.

For example, Albert Einstein's birthday is March 14, 1879. The calculation of his Life Path Number would look like this:

year: 1 + 8 + 7 + 9 = 25; 2 + 5 = 7
month: 0 + 3 = 3
day: 1 + 4 = 5
final result: 7 + 3 + 5 = 15; 1 + 5 = 6
Einstein's Life Path Number is therefore: 6

Write the function lifePathNumber(dateOfBirth) that accepts a date of birth (as a string) on the following format: "yyyy-mm-dd". Where "y" is year, "m" is month and "d" is day. The function shall return a one digit integer between 1 and 9 which represents the Life Path Number of the given date of birth.

You do not need to check that the input to the lifePathNumber()-function is correct format. You can assume that the input to the function will always be a valid date (as a string) with the format: "yyyy-mm-dd".

Note: If the month or day is a single digit number, then it shall be preceeded by a 0 (zero). For example, in Einstein's case the month of March is 3; which is a single digit number. The function shall in this case be called with the following parameter: lifePathNumber("1879-03-14").
*/
function lifePathNumber(dateOfBirth) {
  return [...dateOfBirth.split('-')].map(v=>v.split('').reduce((a,b)=>a+b*1,0))
 .map(v=>v.toString().split('').reduce((a,b)=>a+b*1,0)).reduce((a,b)=>a+b*1,0).toString().split('').reduce((a,b)=>a+b*1,0)
 .toString().split('').reduce((a,b)=>a+b*1,0)
}
