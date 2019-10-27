/*
This cipher involves taking each character of a string and multiplying their char codes by 6.

For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.

You must write two functions:
`encode` to encode a given string,
`decode` to decode a given string.
*/
function encode(str) {
  return str
    .split("")
    .map(v => String.fromCharCode(v.charCodeAt() * 6))
    .join("");
}

function decode(str) {
  return str
    .split("")
    .map(v => String.fromCharCode(v.charCodeAt() / 6))
    .join("");
}
