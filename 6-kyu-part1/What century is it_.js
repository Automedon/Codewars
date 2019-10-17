/*
Description:
Return the inputted numerical year in century format. For example 2014, would return 21st.

The input will always be a 4 digit string. So there is no need for year string validation

Examples:
Input: 1999 Output: 20th
Input: 2011 Output: 21st
Input: 2154 Output: 22nd
Input: 2259 Output: 23rd
Input: 1124 Output: 12th
Input: 2000 Output: 20th
*/
function whatCentury(year) {
  let cent = year.toString().slice(0, 2) * 1;
  if (year % 1000 === 0) {
    switch (cent) {
      case 10:
        return `10th`;
      case 20:
        return `20th`;
      case 30:
        return `30th`;
    }
  }
  cent = cent + 1;
  switch (cent) {
    case 11:
      return `${cent}th`;
    case 12:
      return `${cent}th`;
    case 13:
      return `${cent}th`;
    case 20:
      return `${cent}th`;
    case 21:
      return `${cent}st`;
    case 23:
      return `${cent}rd`;
    case 22:
      return `${cent}nd`;
  }
}
