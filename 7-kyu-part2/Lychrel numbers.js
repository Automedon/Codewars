/*
Description:
Tammy the truffle pig has turned her back on hunting truffles. There are only so many truffles a pig can eat before she is all truffled out.

So now she is turning her hunting skills to an even more challenging quarry - Lychrel numbers, Yay!

Learning the ways of the Lychrel hunter, she is given the following algorithm:

Take an integer n = n(0) , greater than zero.
Form the next n of its series by reversing the digits of the current n and adding the result to the current n .
Repeat step 2 and stop when n becomes palindromic - i.e. the digits of n read the same when reversed.
Sounds simple. But what if the algorithm never stops?

Lychrel numbers are the numbers where this algorithm does not terminate, ie n never seems to become palindromic.

##Task:

Write a function, howManyIterationsNeeded , which takes a number n as its first parameter, and returns the number of times step 2 is performed before n becomes palindromic. Note that step 2 should be perfomed at least once.

If, for a given n , the algorithm does not terminate after a reasonable number of iterations, your function should return null . What is 'reasonable' depends on how much Lychrel hunting power you have, so your function should be able to take an optional second (numerical) parameter, maxIter , which is the limit of how many times to perform step 2 before returning null .

##Example: To reach a palindrome from 67 requires 2 iterations of step 2:

n(0) = 67
n(1) = 143 (67+76)
n(2) = 484 (143+341)
After the second iteration, we have reached a palindrome, since 484 reversed is 484.
So, howManyIterationsNeeded(67) should return 2.

##Notes:

Your function does not need to deal with values of n greater than 10600.

More info on Lychrel numbers
*/
function howManyIterationsNeeded (num,a=50){
  for (let i=1;i<=a;i++){
    num=num+num.toString().split``.reverse().join``*1
    if (num.toString()===num.toString().split``.reverse().join``) return i
    
  }
  return null
}
