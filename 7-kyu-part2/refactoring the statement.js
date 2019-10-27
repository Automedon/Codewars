/*
Description:
We want to convert numbers in a given string to specific characters according to ASCII code with some manipulation on it. This statement 'str8ng is he17e' should converted to 'string is here', its just converting these numbers to ASCII code then to a char according to it.

So you should understand how ASCII code of chars are sorted, and if its begin with 'a' as 0, next one is 'b' which is 1 in someway.

each word contains just one character to convert the number to it.

Example: if given string is '0pple' that will return 'apple'.
*/
function refactoryString(str) {
  let obj = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z"
  };
  return str.replace(/\d+/g, v => {
    return obj[v * 1 + 1];
  });
}
