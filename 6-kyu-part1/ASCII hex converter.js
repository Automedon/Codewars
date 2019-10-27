/*
Write a module Converter that can take ASCII text and convert it to hexadecimal. The class should also be able to take hexadecimal and convert it to ASCII text.

Example
Converter.toHex("Look mom, no hands")
=> "4c6f6f6b206d6f6d2c206e6f2068616e6473"

Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473")
=> "Look mom, no hands"
*/
var Converter = {
  toAscii: function(hex) {
    let arr = [];
    for (let i = 0; i < hex.length; i += 2) {
      arr.push(hex.slice(i, i + 2));
    }
    return arr.map(v => String.fromCharCode(parseInt(v, 16))).join("");
  },
  toHex: function(ascii) {
    return ascii
      .split("")
      .map(v => v.charCodeAt().toString(16))
      .join("");
  }
};
