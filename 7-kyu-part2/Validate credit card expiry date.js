/*
Description:
It is a simple, real world task. You will receive a single string as input. It will have the month (2 digits) and year(2 or 4 digits). These are separated by one character ("-" or "/", maybe some spaces too). For example:

02/21
02 / 21
02 / 2021
02-2021
Assume that all dates are in the XXI century.

Your task is to write a function that returns true or false if the expiry date is not in the past. Note, current month should still return true.

Good luck.
*/
function checkExpiryValid (date1) {
  let date = new Date(Date.now());
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let arr = [],temp='';
  for (let i=0;i<date1.length;i++)
  {
  if (/[0-9]/.test(date1[i])){ temp+=date1[i]}
  else {arr.push(temp);temp=''}
  if (i===date1.length-1){arr.push(temp)}
  }
  arr=arr.filter(v=>v.length>1)
  return arr[1].slice(-2)*1>=year.toString().slice(-2)
}
