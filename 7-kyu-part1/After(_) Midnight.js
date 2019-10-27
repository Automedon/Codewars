/*
Description:
###Instructions

Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.

dayAndTime(0)       should return 'Sunday 00:00'
dayAndTime(-3)      should return 'Saturday 23:57'
dayAndTime(45)      should return 'Sunday 00:45'
dayAndTime(759)     should return 'Sunday 12:39'
dayAndTime(1236)    should return 'Sunday 20:36'
dayAndTime(1447)    should return 'Monday 00:07'
dayAndTime(7832)    should return 'Friday 10:32'
dayAndTime(18876)   should return 'Saturday 02:36'
dayAndTime(259180)  should return 'Thursday 23:40' 
dayAndTime(-349000) should return 'Tuesday 15:20'
*/
function dayAndTime(n) {
  let days = "Sun Mon Tues Wednes Thurs Fri Satur".split` `.map(e => e + "day");
  let mod = m => ((n % m) + m) % m,
    pad = m => ("0" + m).slice(-2);
  return (
    days[(mod(10080) / 1440) | 0] +
    " " +
    pad((mod(1440) / 60) | 0) +
    ":" +
    pad(mod(60) | 0)
  );
}
