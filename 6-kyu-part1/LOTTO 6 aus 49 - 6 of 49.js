/*
Description:
In Germany we have "LOTTO 6 aus 49". That means that 6 of 49 numbers are drawn as winning combination.
There is also a "Superzahl", an additional number, which can increase your winning category.

In this kata you have to write two methods.

function numberGenerator()

function checkForWinningCategory(checkCombination, winningCombination)
The first method is for drawing the lottery numbers.
You have to create an array with 7 random numbers. 6 from these are from 1 - 49.
Of Course every number may only occure once.
And the 7th number is the "Superzahl". A number from 0 - 9. This number is independent from the first six numbers.
The first 6 numbers have to be in ascending order.

A result could be:
4, 9, 17, 22, 25, 35, 0
Or:
4, 18, 22, 34, 41, 44, 4

The second method should check a given number against the winning combination and have to return the winning category:

1  - 6 numbers and Superzahl match
2  - 6 numbers match
3  - 5 numbers and Superzahl match
4  - 5 numbers match
5  - 4 numbers and Superzahl match
6  - 4 numbers match
7  - 3 numbers and Superzahl match
8  - 3 numbers match
9  - 2 numbers and Superzahl match
-1 - if the numbers do not match any of the rules above


Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/
const numberGenerator=()=>{
  let arr = [];
  for (let i=0;arr.length!==6;i++){
    let x = getRandomIntInclusive(1,49)
    if (!arr.includes(x)) arr.push(x)
  }
  arr=arr.sort((a,b)=>a-b)
  arr.push(getRandomIntInclusive(0,9))
  return arr
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
function checkForWinningCategory(checkCombination, winningCombination) {
  let s =false
  let count = 0
  checkCombination.slice(0,6).map((v,i)=>winningCombination.slice(0,6).includes(v)?count++:0)
  if (checkCombination[checkCombination.length-1]===winningCombination[winningCombination.length-1])s=true
  if (count===6&&s) return 1
  if (count===6&&!s) return 2
  if (count===5&&s) return 3
  if (count===5&&!s) return 4
  if (count===4&&s) return 5
  if (count===4&&!s) return 6
  if (count===3&&s) return 7
  if (count===3&&!s) return 8
  if (count===2&&s) return 9
  return -1
}
