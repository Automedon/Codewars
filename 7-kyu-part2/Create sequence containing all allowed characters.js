/*
Description:
Define createSequence(regex) function that returns a string of all characters (in ASCII order) matching specified regular expression one-character criterion.

Examples
let digits = /[0-9]/;
// createSequence(digits) === '0123456789'

let hexadecimal = /[0-9A-F]/;
// createSequence(hexadecimal) === '0123456789ABCDEF'
*/
const createSequence = regex => {
  let seq = "";
  for (let i = 0; i < 256; i++) {
    if (regex.test(String.fromCharCode(i))) {
      seq += String.fromCharCode(i);
    }
  }

  return seq;
};
