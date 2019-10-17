/*
Description:
In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
Ready?
*/
function tiyFizzBuzz(sentence){
  return sentence.split``.map(v=>{
    if (/[\W]/.test(v)) return v
    if (/[^AEIUO \d]/.test(v)&&v===v.toUpperCase()) return "Iron"
    if (/[AEIUO]/.test(v)) return "Iron Yard"
    if (/[aeiou]/.test(v)) return "Yard"
    return v
  }).join``
}
