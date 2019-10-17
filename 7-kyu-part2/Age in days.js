/*
Description:
Did you ever want to know how many days you are old? Write a function ageInDays which returns your age in days.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"
The birthday is entered as integers in the following order

ageInDays(year, month, day)
For example if you are born 27 November 2007 then call ageInDays(2007, 11, 27).

Your birthday is expected to be in the past.

Suggestions on how to improve the kata are welcome!
*/
function ageInDays(year, month, day){
  const birthday = new Date().getTime();
  const date=new Date(year,month-1,day).getTime()
  const days=Math.floor(Math.abs(birthday-date) / (1000 * 3600 * 24))
  return `You are ${days} days old`
}
