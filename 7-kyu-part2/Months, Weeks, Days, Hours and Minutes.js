/*
Description:
Given a number of minutes, translate it into a readible human timestamp.

For example: 100 minutes equals "1 hour 40 minutes" And: 52874 minutes equals "1 month 1 week 1 day 17 hours 14 minutes"

Given that each month has 28 days.

The largest amount of minutes you'll have to test for is under a year so you'll have to translate it to Months, Weeks, Days, Hours and Minutes.
*/
function displayValue(value) {
  let h=0,m=0,d=0,w=0,mo=0
  while (value>=60*24*28){
  value-=60*24*28
  mo+=1
  }
  while (value>=60*24*7){
  value-=60*24*7
  w+=1
  }
  while (value>=60*24){
  value-=60*24
  d+=1
  }
  while (value>=60){
  value-=60
  h+=1
  }
  while (value>0){
  value-=1
  m+=1
  }
  return `${mo>0?mo>1?mo+' months ':mo+' month ':''}${w>0?w>1?w+' weeks ':w+' week ':''}${d>0?d>1?d+' days ':d+' day ':''}${h>0?h>1?h+' hours ':h+' hour ':''}${m>0?m>1?m+' minutes':m+' minute':''}`.trim();
}
