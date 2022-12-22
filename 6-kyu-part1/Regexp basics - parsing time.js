/*
Description:
Implement String#to_seconds, which should parse time expressed as HH:MM:SS, or nil otherwise.

Any extra characters, or numbers of minutes/seconds higher than 59, should result in nil being returned.
*/

String.prototype.toSeconds = function() {
  if (!/^\d\d:\d\d:\d\d$/.test(this)) return null;
  let arr = this.split`:`;
  if (arr[1] * 1 > 59 || arr[2] * 1 > 59) return null;
  return arr[0] * 60 * 60 + arr[1] * 60 + arr[2] * 1;
};
