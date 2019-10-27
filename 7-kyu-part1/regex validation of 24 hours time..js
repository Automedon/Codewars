/*
Description:
Write a regex to validate a 24 hours time string. See examples to figure out what you should check for:

Accepted: 01:00 - 1:00

Not accepted:

24:00

You should check for correct length and no spaces.
*/
function validateTime(time) {
  let arr = time.split(":");
  if (arr[0] * 1 > 23 || arr[1] * 1 > 59 || time.length > 5) return false;
  return /\d{1,2}:\d{2}/.test(time);
}
