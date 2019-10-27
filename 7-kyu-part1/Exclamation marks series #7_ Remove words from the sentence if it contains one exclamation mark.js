/*
Description:
Remove words from the sentence if it contains one exclamation mark. Words are separated by spaces in the sentence. Please remember, one.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
Note
Please don't post issue about difficulty or duplicate.
*/
function remove(s) {
  return s
    .split(" ")
    .map(v => v.replace(/(^\w+!$|^!\w+$)/, ""))
    .join(" ")
    .trim()
    .replace(/\s+/g, " ");
}
