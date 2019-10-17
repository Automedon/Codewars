/*
Description:
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/
function insideOut(x) {
  return x.split` `.map(v => {
    if (v.length < 4) return v;
    let left = v.slice(0, v.length / 2).split``.reverse().join``;
    let right = v.slice(v.length / 2).split``.reverse().join``;
    let center = "";
    if (v.length % 2 !== 0) {
      right = v.slice(v.length / 2 + 1).split``.reverse().join``;
      center = v.slice(v.length / 2, v.length / 2 + 1);
    }
    return left + center + right;
  }).join` `;
}
