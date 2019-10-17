/*
Description:
Write a function

titleToNumber(title) or title_to_number(title) or titleToNb title ...

(depending on the language)

that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

Examples:

titleTonumber('A') === 1
titleTonumber('Z') === 26
titleTonumber('AA') === 27

*/

function titleToNumber(title) {
  return title.split("").map(x=> x.charCodeAt(0)-64).reduce((x,y)=> x*26+y)
}
