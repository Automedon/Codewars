    
/*
Description:
You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:
class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".
Notes:
Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money
*/
function mostMoney(students) {
  let arr  = []
  let dict = [5,10,20]
  students.map(v=>arr.push([...Object.values(v).slice(0,1).concat(Object.values(v).slice(1).reduce((a,b,i)=>a+b*dict[i],0))]))
  let max = Math.max(...arr.map(v=>v[1]))
  arr=arr.filter(v=>v[1]===max)
  return arr.length>1?'all':arr[0][0]
}
