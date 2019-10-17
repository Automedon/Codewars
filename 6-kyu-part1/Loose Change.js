/*
Description:
Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

Notes:

If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
If a float is passed into the function, its value should be be rounded down, and the resulting dictionary should never contain fractions of a coin.
Examples
loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}
*/
function looseChange(cents){
   cents=Math.floor(cents);
   let obj={'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0};
   while (cents>=25){
     cents-=25;
     obj.Quarters++
   }
   while (cents>=10){
     cents-=10;
     obj.Dimes++
   }
   while (cents>=5){
     cents-=5;
     obj.Nickels++
   }
   while (cents>=1){
     cents-=1;
     obj.Pennies++
   }
   return obj
}
