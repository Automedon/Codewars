/*
Description:
Your friend Rick is trying to send you a message, but he is concerned that it would get intercepted by his partner. He came up with a solution:

1) Add digits in random places within the message.

2) Split the resulting message in two. He wrote down every second character on one page, and the remaining ones on another. He then dispatched the two messages separately.

Write a function interweave(s1, s2) that reverses this operation to decode his message!

Example 1: interweave("hlo", "el") -> "hello" Example 2: interweave("h3lo", "el4") -> "hello"

Rick's a bit peculiar about his formats. He would feel ashamed if he found out his message led to extra white spaces hanging around the edges of his message...
*/
function interweave(s1, s2) {
  s1 = s1.split("");
  s2 = s2.split("");
  let arr = [];
  let str = (s1.join(``) + s2.join(``)).slice();
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      arr.push(s1.shift());
    } else {
      arr.push(s2.shift());
    }
  }
  return arr.join("").replace(/[0-9]/gi, "");
}
