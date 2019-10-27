/*
Description:
Intro
Hi there! You have to implement the

get_reversed_color(hex_color) (Python, Ruby, Haskell)

or getReversedColor(hexColor) (JavaScript, Java)



function that takes a hex-color string and returns the string represents the complementary color.

What is the hex-color? You can find the answer on w3schools and Wikipedia

Input
It takes only one argument - string with hex value (case-ignored with chars 0..9 or A..F) without hash-char "#". Argument hex_color is not necessarily with 6-digits length - rest of digits are filled by zeros:

"a23" <=> "000a23"
"" <=> "0" <=> "000000"
Output
Output is the upper-cased string contains of the hash character (#) and complementary color. Complementary color is some color which gives completely white color in sum with entered one: #000A23 + #FFF0DD = #FFFFFF

Errors
If the entered string is incorrect: length is 7+, has non-hexadecimal characters or non-string type, then the Error(IllegalArgumentException - Java) should be raised/thrown or Nothing should be returned in Haskell.

>>> getReversedColor("00fffff")
Uncaught Error: Incorrect string length
>>> getReversedColor("00ffZZ")
Uncaught Error: Non-hex chars
>>> getReversedColor(112233)
Uncaught Error: Incorrect string type
Examples
>>> getReversedColor("01fD08")
"#FE02F7"
>>> getReversedColor("")
"#FFFFFF"
>>> getReversedColor("a23")
"#FFF5DC"
*/
function getReversedColor(hex) {
    if (typeof hex !== 'string' || !/^(\d|[a-fA-F]){0,6}$/.test(hex))
      throw new Error();
    return "#"+(0xffffff ^ parseInt(hex, 16)).toString(16).toUpperCase()
}
