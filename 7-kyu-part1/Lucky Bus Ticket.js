/*
Description:
In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.

isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
isLucky('12341234') => false // Only six-digit numbers allowed :(
isLucky('12a21a') => false // Letters are not allowed :(
isLucky('100200') => false // :(
isLucky('22') => false // :(
isLucky('abcdef') => false // :(
*/

function isLucky(ticket) {
  if (ticket.length != 6 || ticket.length === 0) return false;
  return (
    ticket
      .slice(0, Math.round(ticket.length) / 2)
      .split("")
      .reduce((a, b) => a + b * 1, 0) -
      ticket
        .slice(Math.round(ticket.length) / 2)
        .split("")
        .reduce((a, b) => a + b * 1, 0) ===
    0
  );
}
