/*
Description:
Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 and false otherwise. But looks like he has messed it up. Could you help him out? Please!

Rank and Upvote if you liked it :D

P.S.- Random tests to be added soon.
*/
function isItBugged(code) {
  return /^\d\d-\d\d-\d\d\d\d\s\d\d:\d\d/.test(code);
}
