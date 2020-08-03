/*
Description:


We all love fridays, and even better if it is the last day of the month!

In this kata you should write a function that will receive 2 parameters. Both are years, and indicates a range.

Your work is to return the number of times a month ends with a Friday.

If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!

For example, between 1901 and 2000, a month ends on Friday 171 times.
*/
function lastDayIsFriday(initialYear, endYear = initialYear) {
  let fridays = 0
  for (let y = initialYear; y <= endYear; y++) {
    for (let month = 0; month < 12; month++) {
      if (new Date(y, month + 1, 0).getDay() === 5) fridays++
    } 
  }
  return fridays
}
