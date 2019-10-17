/*
Description:
Create a function that will decipher a message created using char codes

Char Codes: https://www.w3schools.com/charsets/ref_html_ascii.asp

The input will be a string, where every letter's char code will be seperated with a hyphen: "72-101-108-108-111"

The function should decipher the message:

charDecipher("72-101-108-108-111") // => 'Hello'
charDecipher('66-117-115-104-32-68-105-100-32-57-47-49-49') // => "Bush Did 9/11"
*/
function charDecipher(charString) {
  return charString.split("-").map(v => String.fromCharCode(v)).join``;
}
