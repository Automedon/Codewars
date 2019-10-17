/*
Description:
You are given string "elements" and an int "n". Your task is to return a string that is a palindrom using elements from the string "elements" with the length "n".

The format of the palindromization:

Your palindrome begins with the first element of "elements".
After obtaining a pair, you insert the next element in "elements" to the palindrome.
The next element will be paired inside the first pair.
Repeat
If you have reached the last element of "elements" then repeat the process from the start.
Error cases: 
If the string elements is empty or n is smaller than 2, return the string "Error!" 

Examples: 
<<<<<<< mine

For elements = "123" 
n = 2 => result = "11"
n = 3 => result = "121"
n = 4 => result = "1221"
n = 5 => result = "12321"
n = 6 => result = "123321"
n = 7 => result = "1231321"
n = 8 => result = "12311321"
n = 9 => result = "123121321"
n = 10=> result = "1231221321"
=======
*/
function palindromization(s, n){
  if(s==''||n<2) return 'Error!';
  return s.repeat(n).slice(0,Math.floor(n/2))+s.repeat(n).slice(0,Math.ceil(n/2)).split('').reverse().join('');
}
