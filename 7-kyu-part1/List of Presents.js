/*
Description:
Task:
Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

Write the following function to help Leo out:

function howManyGifts(maxBudget, gifts)
The first parameter is Leo's budget; he second one is an array (a list in Groovy) containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

Example:
Maximum budget: 20
Gift List: [13, 2, 4, 6, 1]
Should return 4.

_ NOTE: All numbers will be integers >= 0, and the array will never be empty. _
*/
function howManyGifts(maxBudget, gifts) {
  gifts = gifts.sort((a, b) => a - b);
  let sum = 0;
  let i = 0;
  while (maxBudget >= sum) {
    sum += gifts[i];
    i++;
  }
  return i - 1;
}
