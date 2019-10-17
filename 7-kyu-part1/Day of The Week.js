/*
Description:
Oh no! I need to find out what day it is on a few particular dates. Help me figure it out. Return either Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday.

Dates may be passed in as strings or as Objects.
*/
function getDayOfTheWeek(date) {
  if (/:/.test(date)) return date;
  let day = date.split("/")[1] * 1;
  let month = date.split("/")[0] * 1;
  let year = date.split("/")[2] * 1;
  let date1 = new Date(Date.UTC(year, month - 1, day));
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date1);
}
