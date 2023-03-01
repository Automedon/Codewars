/*
Description:
Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.

Notes:
Words are separated with spaces
Each word will include at least 1 letter
There will be no exclamation marks in the middle of a word
Examples
remove("Hi!") === "Hi"
remove("!Hi! Hi!") === "!Hi! Hi"
remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
*/

function remove(s) {
  return s.split` `.map(v => {
    let left = (v.match(/^!+/) || []).join``.length;
    let right = (v.match(/!+$/) || []).join``.length;
    let center = v.match(/\w+/).join``;
    let min = Math.min(left, right);
    return "!".repeat(min) + center + "!".repeat(min);
  }).join` `;
}
