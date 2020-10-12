/*
Description:
In this Kata, you will be given a series of times at which an alarm goes off. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm goes off now, it will not go off for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not go off is 11 hours and 40 minutes.
In the second example, the alarm goes off 4 times in a day.

More examples in test cases. Good luck!
*/
function solve(arr){
  if(arr.length===1) return '23:59';
  var l=arr.map(e=>e.split(':').reduce((h,m)=>+m+h*60)).sort((a,b)=>a-b);
  var m=Math.max(...l.map((n,i)=>((l[i+1]||l[0])-n+24*60)%(24*60)))-1;
  return [m/60|0,m%60].map(n=>(''+n).padStart(2,'0')).join(':');
}
