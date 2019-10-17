/*
Description:
Sam has opened a new sushi train restaurant - a restaurant where sushi is served on plates that travel around the bar on a conveyor belt and customers take the plate that they like.

Sam is using Glamazon's new visual recognition technology that allows a computer to record the number of plates at a customer's table and the colour of those plates. The number of plates is returned as a string. For example, if a customer has eaten 3 plates of sushi on a red plate the computer will return the string 'rrr'.

Currently, Sam is only serving sushi on red plates as he's trying to attract customers to his restaurant. There are also small plates on the conveyor belt for condiments such as ginger and wasabi - the computer notes these in the string that is returned as a space ('rrr r' //denotes 4 plates of red sushi and a plate of condiment).

Sam would like your help to write a program for the cashier's machine to read the string and return the total amount a customer has to pay when they ask for the bill. The current price for the dishes are as follows:

Red plates of sushi ('r') - $2 each, but if a customer eats 5 plates the 5th one is free.
Condiments (' ') - free.
Input: String
Output: Number

Examples:

Input: 'rr'  Output: 4
Input: 'rr rrr' Output: 8
Input: 'rrrrr rrrrr' Output: 16
*/
function totalBill(str) {
  str = str.replace(/\s/g, "");
  return str
    ? (str.match(/r/g).length - Math.floor(str.match(/r/g).length / 5)) * 2
    : 0;
}
