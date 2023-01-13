/*
Description:
Run-length encoding (RLE) is a very simple form of lossless data compression in which runs of data are stored as a single data value and count.

A simple form of RLE would encode the string "AAABBBCCCD" as "3A3B3C1D" meaning, first there are 3 A, then 3 B, then 3 C and last there is 1 D.

Your task is to write a RLE encoder and decoder using this technique. The texts to encode will always consist of only uppercase characters, no numbers.
*/

function encode(input) {
  let count = 1;
  let str = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      str += `${count}${input[i]}`;
      count = 1;
    }
  }
  return str;
}

function decode(input) {
  const arr = input
    .slice()
    .replace(/\d/gi, " ")
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(v => v);
  const arr2 = input
    .slice()
    .replace(/\D/gi, " ")
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(v => v);
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i].repeat(arr2[i] * 1)}`;
  }
  return str;
}
