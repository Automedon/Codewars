/*
Description:
Create a function called lowerCaseLetters which takes a string as argument. the string will contain some upper case letters and some numbers, then create a new variable which needs to contain all the lowercase letters of the original string once done return the resulted string.

Each word starts with an uppercase character so you can use this to determine where each word starts and to set the spaces correctly.

See examples

lowerCaseLetters("T3472423423384378e444stT449328h94589458i45857s") ===> "test this"

lowerCaseLetters("G4e5o6r7g8e L432ike4543s Re453ad543ing Bo4535ok4355s") ===> "george likes reading books"
*/
var lowerCaseLetters = (str)=> {
  return str.replace(/[0-9 ]/g,'').replace(/([A-Z])/g,' $1').trim().toLowerCase()
}
