/*
Description:
Finish the function numberToOrdinal, which should take a number and return it as a string with the correct ordinal indicator suffix (in English). That is:

numberToOrdinal(1) ==> '1st'
numberToOrdinal(2) ==> '2nd'
numberToOrdinal(3) ==> '3rd'
numberToOrdinal(4) ==> '4th'
... and so on
For the purposes of this kata, you may assume that the function will always be passed a non-negative integer. If the function is given 0 as an argument, it should return '0' (as a string).
To help you get started, here is an excerpt from Wikipedia's page on Ordinal Indicators:

st is used with numbers ending in 1 (e.g. 1st, pronounced first)
nd is used with numbers ending in 2 (e.g. 92nd, pronounced ninety-second)
rd is used with numbers ending in 3 (e.g. 33rd, pronounced thirty-third)
As an exception to the above rules, all the "teen" numbers ending with 11, 12 or 13 use -th (e.g. 11th, pronounced eleventh, 112th, pronounced one hundred [and] twelfth)
th is used for all other numbers (e.g. 9th, pronounced ninth).
*/
function numberToOrdinal(n) {
  var suffix = "th";
  if (n == 0) suffix = "";
  if (n % 10 == 1 && n % 100 != 11) suffix = "st";
  if (n % 10 == 2 && n % 100 != 12) suffix = "nd";
  if (n % 10 == 3 && n % 100 != 13) suffix = "rd";
  return n + suffix;
}
