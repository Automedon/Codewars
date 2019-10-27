/*
Description:
Write function toAcronym which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
Eg:

Code wars -> C, w -> C W -> CW
*/
function toAcronym(input) {
  return input
    .split(" ")
    .map(v => v[0].toUpperCase())
    .join("");
}
