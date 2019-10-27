/*
Description:
Description:
Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end, add a ! to the end; If there are more than one ! at the end of word, keep it.

Examples
removeOrAdd("Hi!") === "Hi"
removeOrAdd("Hi! Hi!") === "Hi Hi"
removeOrAdd("Hi! Hi") === "Hi Hi!"
removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"
removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!"
Note
Please don't post issue about difficulty or duplicate.
*/
function removeOrAdd(s) {
  return s
    .split(" ")
    .map(word => {
      if (word.match(/!{2,}$/)) return word;
      if (!word.match(/!$/)) return word + "!";
      return word.replace(/!$/, "");
    })
    .join(" ");
}
