/*
Description:
What is your favourite day of the week? Check if it's the most frequent day of the week in the year.

You are given a year as integer (e. g. 2001). You should return the most frequent day(s) of the week in that year. The result has to be a list of days sorted by the order of days in week (e. g. ['Monday', 'Tuesday']). Week starts with Monday.

Input: Year as an int.

Output: The list of most frequent days sorted by the order of days in week (from Monday to Sunday).

Preconditions: Year is between 1 and 9999. Week starts with Monday. Calendar is Gregorian.

Example:

mostFrequentDays(2427) => ['Friday']
mostFrequentDays(2185) => ['Saturday']
mostFrequentDays(2860) => ['Thursday', 'Friday']
In Ruby years will start from 1593.
*/
function mostFrequentDays(year) {
  const weekDays = {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
    Saturday: 0,
    Sunday: 0
  };
  let date = new Date(year, 0, 0).getTime() + 1;
  for (let i = 0; ; i++) {
    date += 1000 * 60 * 60 * 24;
    if (new Date(date).getFullYear() > year) {
      break;
    }
    if (new Date(date).getDay() === 0) weekDays.Sunday++;
    if (new Date(date).getDay() === 1) weekDays.Monday++;
    if (new Date(date).getDay() === 2) weekDays.Tuesday++;
    if (new Date(date).getDay() === 3) weekDays.Wednesday++;
    if (new Date(date).getDay() === 4) weekDays.Thursday++;
    if (new Date(date).getDay() === 5) weekDays.Friday++;
    if (new Date(date).getDay() === 6) weekDays.Saturday++;
  }
  const max = Math.max(...Object.values(weekDays));
  return [].concat(
    Object.entries(weekDays)
      .filter(v => v[1] === max)
      .map(v => v[0])
  );
}
