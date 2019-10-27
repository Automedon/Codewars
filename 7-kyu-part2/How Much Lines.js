/*
Description:
So this is a more mathmatical quistion ,imagine a series of numbers (1,2,3,4,5,6,7,8...) each number is a square , for example: 
check this linkto see the squares - https://imgur.com/uTIhmRN 
n=1- this square has 4 different lines of one dash.

n=2- this is a square that contains of 12 different lines that each line is one dash , and 6 different lines that are 2 dashes , so this square contains 18 different lines. 

n=3- this square contains of 24 different lines that each line is one dash ,and 16 different line that is the length of 2 dashes, for example :this" - - - "contains two different lines of two dashes ( <__ ->) 
or (<- __>),and the square contains 8 different lines of four dashes, so it contains 48 different lines. 

n=4 has 100 different lines. 
write a function that gets an "n" - a number abd returns how much different lines there is in this square(n).
*/
function differentLines(n) {
  return Math.pow(n + 1, 2) * n;
}
