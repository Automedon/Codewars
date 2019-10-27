/*
Description:
Objective
Write a function named prettyTimeFormat that takes a number of seconds and converts it to a colon-separated format with hours, minutes, and seconds.

Requirements
If there are 0 hours, it should be omitted, along with the colon separating hours and minutes.
If there are 0 hours and 0 minutes, both should be omitted, along with all colons.
Seconds should have a leading 0 if minutes are greater than 0 and seconds are less than 10.
Minutes should have a leading 0 if hours are greater than 0 and minutes are less than 10.
Hours should never have a leading 0.
Minutes and seconds should never exceed 2 digits.
Input can be a float, but floats should round down (floor).
Output should be a string.
Assume that input values will be positive numbers or 0.
Examples
formatTime(5);    // should return 5
formatTime(30);    // should return 30
formatTime(90);    // should return 1:30
formatTime(14989); // Should return 4:09:49
*/
function prettyTimeFormat(seconds) {
  seconds = Math.floor(seconds);
  let h = Math.floor(seconds / 3600);
  let s = Math.floor(seconds % 60);
  let m = Math.floor((seconds / 60) % 60);
  if (h >= 1) return `${h}:${("00" + m).slice(-2)}:${("00" + s).slice(-2)}`;
  if (m >= 1) return `${m}:${("00" + s).slice(-2)}`;
  return `${s}`;
}
