/*
Description:
Making Change
Write a method make_change (makeChange in JavaScript) that will determine the minimum number of coins needed to make change for a given amount in American currency.

Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. They'll be represented by the symbols H, Q, D, N and P (symbols in Ruby, strings in JavaScript.

The argument passed in will be an integer representing the value in cents. The return value should be a hash (an object in JavaScript) with the symbols as keys, and the numbers of coins as values. Coins that are not used should not be included in the hash. If the argument passed in is 0, then the method should return an empty hash.

Ruby examples:

make_change(0) --> {}
make_change(1) --> {:P=>1}
make_change(43) --> {:Q=>1, :D=>1, :N=>1, :P=>3}
make_change(91) --> {:H=>1, :Q=>1, :D=>1, :N=>1, :P=>1}
JavaScript examples:

makeChange(0) --> {}
makeChange(1) --> {"P":1}
makeChange(43) --> {"Q":1,"D":1,"N":1,"P":3}
makeChange(91) --> {"H":1,"Q":1,"D":1,"N":1,"P":1}
Elixir examples:

Currency.make_change(0) --> %{}
Currency.make_change(1) --> %{:P=>1}
Currency.make_change(43) --> %{:Q=>1, :D=>1, :N=>1, :P=>3}
Currency.make_change(91) --> %{:H=>1, :Q=>1, :D=>1, :N=>1, :P=>1}
If you liked this kata, check out Part 2.
*/
const makeChange = (amount) => {
  const change = {}
  while (amount>=50){
    change[`H`]=change[`H`]?change[`H`]+1:1
    amount-=50
  }
  while (amount>=25){
    change[`Q`]=change[`Q`]?change[`Q`]+1:1
    amount-=25
  }
  while (amount>=10){
    change[`D`]=change[`D`]?change[`D`]+1:1
    amount-=10
  }
  while (amount>=5){
    change[`N`]=change[`N`]?change[`N`]+1:1
    amount-=5
  }
  while (amount>=1){
    change[`P`]=change[`P`]?change[`P`]+1:1
    amount-=1
  }
  return change
};
