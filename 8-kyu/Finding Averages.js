/*
Description:
Make a program that takes a list of a random amount (but will always have atleast 1 number in) of numbers and returns the average, or mean, of the numbers. Also the program should return "Incorrect" if the value entered is a string.

(Use integer division to divide the numbers, (if you actually use the division method))

Ex: If input is [70, 70, 70, 70, 70] the program should return 70 (for obvious reasons)
*/
var average = (n) => {
   if (Array.isArray(n)&&n.every(v=>typeof v ==='number')) return n.reduce((a,b)=>a+b,0)/n.length
   return 'Incorrect'
}
