/*
Description:
If the first day of the month is a Friday, it is likely that the month will have an Extended Weekend. That is, it could have five Fridays, five Saturdays and five Sundays.

In this Kata, you will be given a start year and an end year. Your task will be to find months that have extended weekends and return:

- The first and last month in the range that has an extended weekend
- The number of months that have extended weekends in the range, inclusive of start year and end year.
For example:

solve(2016,2020) = ["Jan","May",5]. The months are: Jan 2016, Jul 2016, Dec 2017, Mar 2019 and May 2020
More examples in test cases. Good luck!

If you found this Kata easy, please try myjinxin2015 challange version here
*/
const EXTENDED_MONTHS = [0, 2, 4, 6, 7, 9, 11];

function solve(a, b) {
  let range = [];
  for (; a <= b; a++) {
    range = range.concat(
      EXTENDED_MONTHS.map(m => new Date(a, m, 1)).filter(d => d.getDay() === 5)
    );
  }

  return [
    range[0].toLocaleString("en-us", { month: "short" }),
    range[range.length - 1].toLocaleString("en-us", { month: "short" }),
    range.length
  ];
}
