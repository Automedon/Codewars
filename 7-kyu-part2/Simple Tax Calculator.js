/*
Description:
Nothing too fancy here, no compound taxes or tiers. Just a simple percentage.

Given two inputs, 1) a dollar ammount and 2) a tax percentage, you must return the ammount of tax in cents (nearest 100th) as a string.

You can assume all input is valid, meaning no strings, negative values or taxes over 100%;
*/
function calculateTax(dollars, taxRate) {
  return (dollars*(taxRate/100)).toFixed(2)
}
