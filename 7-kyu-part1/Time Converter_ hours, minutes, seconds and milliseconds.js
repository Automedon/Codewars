/*
Description:
Given a time in a time format class, return it without year, month and day.

It should return a string including milliseconds with 3 decimals.

Example:

new Date(2016, 2, 8, 16, 42, 59)
//Should return: 
"16:42:59,000"
*/
function convert(time) {
  let ms = time.getMilliseconds();
  if (ms.toString().length < 2) ms = "00" + ms;
  if (ms.toString().length < 3) ms = "0" + ms;
  return time.toTimeString().split(" ")[0] + `,${ms}`;
}
