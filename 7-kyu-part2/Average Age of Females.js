/*
You are going to be given a list of people. Their properties are name (string), gender (male/female), and age (int). Your job is to return the average age of all females in the list.

#Examples:

sortArray([{name:'Sarah', gender:'female', age:25}, {name:'Tom', gender:'male', age:18}, {name:'Tim', gender:'male', age:65}, {name:'Kim', gender:'female', age:58}]) 
should return 41.5
#Input

An array of objects.

#Output

A number, the average age of all females.
*/
function averageFemale(list) {
  if (list.every(v => v.gender === "male")) return 0;
  let arr = [];
  list.map(v => (v.gender === "female" ? arr.push(v.age) : v));
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
