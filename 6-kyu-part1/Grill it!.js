/*
Description:
Introduction
A grille cipher was a technique for encrypting a plaintext by writing it onto a sheet of paper through a pierced sheet (of paper or cardboard or similar). The earliest known description is due to the polymath Girolamo Cardano in 1550. His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written, then later read, through its various apertures. The written fragments of the plaintext could be further disguised by filling the gaps between the fragments with anodyne words or letters. This variant is also an example of steganography, as are many of the grille ciphers. Wikipedia Link

Tangiers1 Tangiers2

Task
Write a function that accepts two inputs: message and code and returns hidden message decrypted from message using the code.
The code is a nonnegative integer and it decrypts in binary the message.

grille("abcdef", 5)  => "df"

message : abcdef
code    : 000101
----------------
result  : df
*/
function grille(message, code) {
  let str = code.toString(2).padStart(message.length, 0);
  if (message.length < code.toString(2).length)
    str = str.slice(-message.length);
  return message.split``.filter((v, i) => str[i] === "1").join``;
}
