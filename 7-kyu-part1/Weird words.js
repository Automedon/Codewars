/*
Description:
In this kata you will have to change every letter in a given string to the next letter in the alphabet. You will write a functionnextLetter to do this. The function will take a single parameter str (string).

EXAMPLES:

"Hello" --> "Ifmmp"

"What is your name?" --> "Xibu jt zpvs obnf?"

"zoo" --> "app"

"zzZAaa" --> "aaABbb"

Note: spaces and special characters should remain the same. Capital letters should transfer in the same way but remain capitilized.
*/
function nextLetter(str) {
  let arr_en = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let arr_EN = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  return str.replace(/[a-z]/gi, v => {
    if (v === v.toLowerCase()) {
      const index = arr_en.indexOf(v);
      return (v = arr_en[(index + 1) % 26]);
    }
    if (v === v.toUpperCase()) {
      const index = arr_EN.indexOf(v);
      return (v = arr_EN[(index + 1) % 26]);
    }
  });
}
