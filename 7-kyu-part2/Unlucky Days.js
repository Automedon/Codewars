/*
Description:
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year as an integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
Note: In Ruby years will start from 1593.
*/
function unluckyDays(year){
  let date = new Date(year,0).getTime()
  let d = 1000*60*60*24
  let friday=0
  for (let i=0;i<365;i++){
    date+=d
    if (new Date(date).getDay()===5&&new Date(date).getDate()===13) friday++
  }
  return friday
}
