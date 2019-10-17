/*
Description:
#~For Kids Challenges~#
Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"
Have fun!
*/
const moment = require("moment");
function dayOfTheWeek(date) {
  date = date.split("/");
  let date1 = new Date(date[2], date[1] - 1, date[0]);
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ][moment(date1).day()];
}
