/*
John is trying to buy a chocolate bar and inserted some money into the vending machine. But vending machine has only 25, 10, 5 and 1 cents available. Help John count how many and which coins he gets back.

Implement a method that accepts the total amount of change and returns  number of coins and of which kind should be returned by vending machine.

For example, the total change is 31.
So, the result will be: 1x25c + 1x5c + 1x1c = 31c
Return the correct ammount of change using the least number of coins.

Note: Zero and negative values are not allowed and an empty dictionary is to be returned
*/
function getChange(m) {
  
  const coins = [25, 10, 5, 1];
  
  let result = 0;
  
  for (const coin of coins) {
    while (m >= coin) {
      m -= 25;
      result++;
    }
  }
  
  return result;
}
