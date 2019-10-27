/*
Description:
Remove all exclamation marks from sentence except at the end.

Examples
remove("Hi!") == "Hi!"
remove("Hi!!!") == "Hi!!!"
remove("!Hi") == "Hi"
remove("!Hi!") == "Hi!"
remove("Hi! Hi!") == "Hi Hi!"
remove("Hi") == "Hi"
Note
Please don't post issue about difficulty or duplicate.
*/

function remove(s) {
  return s.replace(/!+([^!])/g, "$1");
}
