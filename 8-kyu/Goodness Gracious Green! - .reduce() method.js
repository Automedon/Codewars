/*
Description:
You must use the .reduce() method within your answer

Three sisters run Goodness Gracious Green (a shop selling all things green and lovely).
Since opening, they've struggled to agree on the sale cost of products. One believes costs should be kept as low as possible, the middle sister wants to keep an average price and the eldest thinks that they should charge more for their one-of-a-kind green things.

Your task is to create a function called bestPrice which will take an array of 3 prices which should be averaged to return the best and final price.

With your help the sisters can put an end to their fights once and for all!

Things to note:

Prices will be in pence and cannot be negative
Prices will be given as a number, not a string
You must use the .reduce() method within your answer
*/
function bestPrice(arr) {
  return arr.reduce((a,b)=>a+b,0)/arr.length
}
