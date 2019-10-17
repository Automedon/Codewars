/*
Description:
SCHEDULE YOUR DA(RRA)Y

The best way to have a productive day is to plan out your work schedule. Given the following three inputs, please create an an array of time alloted to work, broken up with time alloted with breaks:

Input 1: Hours - Number of hours available to you to get your work done! 
Input 2: Tasks - How many tasks you have to do througout the day
Input 3: Duration (minutes)- How long each of your tasks will take to complete

Criteria to bear in mind:

Your schedule should start with work and end with work.
It should also be in minutes, rounded to the nearest whole minute.
If your work is going to take more time than you have, return "You're not sleeping tonight!"
Example:

dayPlan(8, 5, 30) == [ 30, 83, 30, 83, 30, 83, 30, 83, 30 ]
dayPlan(3, 5, 60) == "You're not sleeping tonight!"
*/

function dayPlan (hours, tasks, duration){
  if (tasks===0) return []
 let t=hours*60;
 let r=(t-(tasks)*duration)/(tasks-1);
 let arr=[];
 if (r<-1) return 'You\'re not sleeping tonight!'
 for (let i=0;i<tasks;i++){
 arr.push(duration)
 arr.push(Math.round(r))
 }
 arr.pop()
  return arr;
}
