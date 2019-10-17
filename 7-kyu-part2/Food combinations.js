/*
Task:
Given an array containing a list of good foods, return a string containing the assertion that any two of the individually good foods are really good when combined.

eg: "You know what's actually really good? Pancakes and relish."

Examples:
Good_foods = ["Ice cream", "Ham", "Relish", "Pancakes", "Ketchup", "Cheese", "Eggs", "Cupcakes", "Sour cream", "Hot chocolate", "Avocado", "Skittles"]

actuallyReallyGood( Good_foods ) #  "You know what's actually really good? Pancakes and relish."

actuallyReallyGood( ['Peanut butter'] ) #  "You know what's actually really good? Peanut butter and more peanut butter."

actuallyReallyGood( [] ) #  "You know what's actually really good? Nothing!"
Notes:
There are many different valid combinations of 2 foods it doesn't matter which one you choose.
But there should be 2 different foods listed unless there was only one food given in the input array.
Capitalization should be correct, the first given food should be capitalized, but the second should not.
The input array should not be modified by the method.

The test cases for this kata are fairly complicated, see if you can trick them. (Then let me know about it in the discourse.)

The original kata language is Ruby

Bonus:
If you thought this kata was easy, try this one: Testing 'Food combinations' in which you get to write a method similar to the one the tests here use to check that a result is valid and returns any errors it has.
*/
function actuallyReallyGood(foods) {
  let str = "You know what's actually really good? ";
  if (foods.length === 0) return str + "Nothing!";
  if (foods[0] === foods[1])
    return str + cap(foods[0]) + " and more " + foods[0].toLowerCase() + ".";
  if (foods.length === 1)
    return str + cap(foods[0]) + " and more " + foods[0].toLowerCase() + ".";
  return str + cap(foods[0]) + " and " + foods[1].toLowerCase() + ".";
}

let cap = s => s[0].toUpperCase() + s.substring(1).toLowerCase();
