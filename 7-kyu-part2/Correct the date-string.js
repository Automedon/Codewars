/*
Description:
A very easy task for you!

You have to create a method, that corrects a given date string. There was a problem in addition, so many of the date strings are broken. Date-Format is european. That means "DD.MM.YYYY". 

Some examples:

"30.02.2016" -> "01.03.2016"
"40.06.2015" -> "10.07.2015"
"11.13.2014" -> "11.01.2015"
"99.11.2010" -> "07.02.2011"

If the input-string is null or empty return exactly this value!
If the date-string-format is invalid, return null.

Hint: Correct first the month and then the day!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/
const moment = require("moment");
function dateCorrect(str) {
  if (str == "") return str;
  if (!/^\d{2}\.\d{2}\.\d{4}$/g.test(str)) return null;
  let year = str.split(".")[2];
  let m = str.split(".")[1] - 1;
  let d = str.split(".")[0];
  let sec = Date.UTC(year, m, d);
  return `${`0${moment(sec).get("date")}`.slice(-2)}.${`0${moment(sec).month() +
    1}`.slice(-2)}.${moment(sec).weekYear()}`;
}
