/*
Description:
A Tombola is a British game in which people pick tickets out of a revolving drum and certain tickets win a prize. Tombolas are often found at fetes and fairs. Tickets are commonly taken from a Raffle book and include the numbers 1 to 999.

Winning tickets must contain a certain number, or have a certain characteristic; some examples are:

1 "Any ticket containing a 7 wins" 2 "Any ticket ending with a 5 or a 0 wins"

Taking the simpler first option of any ticket containing a certain number, could you please write a function which returns the number of winning tickets in a raffle book. The number can be one or two digits.

Your function should take two values; the total number of tickets (you can assume the ticket book starts at 1) and the number which must be present for a ticket to win.

A Tombola
*/
function tombola(range, number) {
  let wins = 0;
  for (let i = 0; i <= range; i++) {
    if (new RegExp(`${number}`).test(i.toString())) wins++;
  }
  return wins;
}
