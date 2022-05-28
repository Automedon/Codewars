/*
What date corresponds to the nth day of the year?
The answer depends on whether the year is a leap year or not.

Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
Only valid combinations of a day number and isLeap will be tested.

Examples:
* With input `41, false` => return "February, 10"
* With input `60, false` => return "March, 1
* With input `60, true` => return "February, 29"
* With input `365, false` => return "December, 31"
* With input `366, true` => return "December, 31"
*/

 function getDay(day, isLeap){
  const date = new Date(2001 - isLeap, 0, day);
  const monthFormat = Intl.DateTimeFormat('en-US', { month: 'long' });
  const dayFormat = Intl.DateTimeFormat('en-US', { day: 'numeric' });
  return `${monthFormat.format(date)}, ${dayFormat.format(date)}`;
}
