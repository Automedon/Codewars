/*
Description:
Write a simple function, that will be given a month name and a month number. The function will convert the name of the month to a number (zero based) and the number of the month will be converted back to a month name.

**Do not use if else or switch.

**The number and the name will be spaced with one space - " " for example

         "January", 0 > "January 0"

         "December", 5 > "June 11"
enjoy ! ^-^
*/
function month(name, number) {
  let month=new Intl.DateTimeFormat('en-US', {month:'long'}).format(new Date(2000,number))
  let month2=new Date(`${name} 25, 1995`).getMonth()
  return `${month} ${month2}`
};
