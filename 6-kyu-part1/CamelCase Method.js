/*
Description:
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/

String.prototype.camelCase = function() {
  let arg = this.toString()
    .trim()
    .split(" ");
  let arr = arg.map((v, i, arr) =>
    v ? v.slice(0, 1).toUpperCase() + v.slice(1) : v
  );
  return arr.join("");
};
