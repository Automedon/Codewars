/*
Description:
Sometimes it's useful to know on which day of the week Christmas, the holly holiday, will occur.
Write a function which takes the date of Christmas, and outputs the day of the week it falls on. Just don't limit yourself to this year. 

Example:

findOutChristmasWeekday('2013 12 25') // returns 'Wednesday'
Only valid Christmas dates will be passed to the function.

Date parameter could be a string or a Date object. If it's a string here are possible date parameter formats:

'2013 12 25'
'12 25 2013'
'25 December 2013'
Note: calendar used in the kata is Gregorian.
*/

function findOutChristmasWeekday(date) {
  if (typeof date == "string") date = date.replace(/ /g, '-');
  return ['Sun', 'Mon','Tues','Wednes','Thurs','Fri','Satur'][new Date(date).getDay()] + "day";
}
