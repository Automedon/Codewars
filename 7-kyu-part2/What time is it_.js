/*
Description:
Given a time in AM/PM format as a string, convert it to military (24-hour) time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Sample Input: 07:05:45PM Sample Output: 19:05:45

Try not to use built in DateTime libraries.

For more information on military time, check the wiki https://en.wikipedia.org/wiki/24-hour_clock#Military_time
*/
var getMilitaryTime = function(input) {
  let t = input.slice(-2);
  let time= input.slice(0,-2).split(`:`);
  let hour = t==='AM'?time[0]*1%12:12+time[0]*1%12;
  return `${('0'+hour).slice(-2)}:${time[1]}:${time[2]}`
};
